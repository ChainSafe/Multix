import { KnownArchivesSubstrate, lookupArchive } from '@subsquid/archive-registry'
import {
  BatchContext,
  BatchProcessorItem,
  SubstrateBatchProcessor
} from '@subsquid/substrate-processor'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store, TypeormDatabase } from '@subsquid/typeorm-store'
import { handleMultisigCall } from './multisigCalls'
import {
  getMultisigAddress,
  getMultisigCallId,
  getOriginAccountId,
  getPureProxyInfoFromArgs,
  getProxyInfoFromArgs
} from './util'
import {
  handleNewMultisigCalls,
  handleNewMultisigs,
  handleNewProxies,
  handleNewPureProxies,
  handleProxyRemovals,
  MultisigCallInfo,
  NewMultisigsInfo,
  NewProxy,
  NewPureProxy
} from './processorHandlers'
import { Env } from './util/Env'
import { getAccountId } from './util/getAccountId'

export const dataEvent = {
  data: {
    event: {
      args: true
    }
  }
} as const

export const dataCall = {
  data: {
    call: {
      args: true,
      origin: true
    }
  }
} as const

const supportedMultisigCalls = [
  'Multisig.as_multi',
  'Multisig.approve_as_multi',
  'Multisig.cancel_as_multi',
  'Multisig.as_multi_threshold_1'
]
export const env = new Env().getEnv()
const archiveUrl =
  env.archiveUrl ||
  lookupArchive(env.archiveName as KnownArchivesSubstrate, {
    release: 'FireSquid'
  })
const chainId = env.chainId

const processor = new SubstrateBatchProcessor()
  .setDataSource({
    archive: archiveUrl,
    chain: env.rpcWs
  })
  .setBlockRange({
    from: Number(env.blockstart)
  })
  // .addCall('Proxy.add_proxy', dataCall)
  // .addCall('Proxy.remove_proxy', dataCall)
  // .addCall('Proxy.remove_proxies', dataCall)
  .addCall('Proxy.proxy', dataCall)
  .addCall('Multisig.as_multi', dataCall)
  .addCall('Multisig.approve_as_multi', dataCall)
  .addCall('Multisig.cancel_as_multi', dataCall)
  .addCall('Multisig.as_multi_threshold_1', dataCall)
  .addEvent('Proxy.PureCreated', dataEvent)
  .addEvent('Proxy.ProxyAdded', dataEvent)
  .addEvent('Proxy.ProxyRemoved', dataEvent)

export type Item = BatchProcessorItem<typeof processor>
export type Ctx = BatchContext<Store, Item>

processor.run(new TypeormDatabase(), async (ctx) => {
  const newMultisigsInfo: NewMultisigsInfo[] = []
  const newPureProxies: Map<string, NewPureProxy> = new Map()
  const newMultisigCalls: MultisigCallInfo[] = []
  const newProxies: Map<string, NewProxy> = new Map()
  const proxyRemovalIds: Set<string> = new Set()

  for (const block of ctx.blocks) {
    const { items } = block
    const timestamp = new Date(block.header.timestamp)

    for (const item of items) {
      if (supportedMultisigCalls.includes(item.name)) {
        const callItem = item as CallItem<'*', true>

        if (!callItem.call.success || !callItem.call.origin) continue

        const signer = getOriginAccountId(callItem.call.origin)
        const callArgs = callItem.call.args

        const { otherSignatories, threshold } = handleMultisigCall(callArgs)
        const signatories = [signer, ...otherSignatories]

        const multisigAddress = getMultisigAddress(signatories, threshold)
        const newMulti = {
          id: getAccountId(multisigAddress, chainId),
          address: multisigAddress,
          threshold,
          newSignatories: signatories,
          isMultisig: true,
          isPureProxy: false
        } as NewMultisigsInfo

        newMultisigsInfo.push(newMulti)
        const blockNumber = block.header.height
        const blockHash = block.header.hash

        newMultisigCalls.push({
          id: getMultisigCallId(
            newMulti.address,
            blockNumber,
            callItem.extrinsic.indexInBlock,
            callItem.call.pos
          ),
          blockHash,
          callIndex: callItem.extrinsic.indexInBlock,
          multisigAddress: newMulti.address,
          timestamp
        })
      }

      if (item.name === 'Proxy.PureCreated') {
        const newPureProxy = getPureProxyInfoFromArgs(item)
        // ctx.log.info(`pure ${newPureProxy.pure}`)
        // ctx.log.info(`who ${newPureProxy.who}`)

        newPureProxies.set(newPureProxy.id, {
          ...newPureProxy,
          createdAt: timestamp
        })
      }

      if (item.name === 'Proxy.ProxyAdded') {
        const newProxy = getProxyInfoFromArgs(item)
        // ctx.log.info(`-----> delegator ${newProxy.delegator}`)
        // ctx.log.info(`-----> delegatee ${newProxy.delegatee}`)
        newProxies.set(newProxy.id, { ...newProxy, createdAt: timestamp })
      }

      if (item.name === 'Proxy.ProxyRemoved') {
        const proxyRemoval = getProxyInfoFromArgs(item)
        // ctx.log.info(`-----> to remove delegator ${proxyRemoval.delegator}`)
        // ctx.log.info(`-----> to remove delegatee ${proxyRemoval.delegatee}`)
        if (newProxies.has(proxyRemoval.id)) {
          newProxies.delete(proxyRemoval.id)
          // ctx.log.info(`<----- remove from set ${proxyRemoval.id}`)
        } else {
          proxyRemovalIds.add(proxyRemoval.id)
          // ctx.log.info(`<----- remove queue ${proxyRemoval.id}`)
        }
      }
    }
  }

  newMultisigsInfo.length && (await handleNewMultisigs(ctx, newMultisigsInfo, chainId))
  newMultisigCalls.length && (await handleNewMultisigCalls(ctx, newMultisigCalls, chainId))
  newPureProxies.size && (await handleNewPureProxies(ctx, Array.from(newPureProxies.values()), chainId))
  newProxies.size && (await handleNewProxies(ctx, Array.from(newProxies.values()), chainId))
  proxyRemovalIds.size && (await handleProxyRemovals(ctx, Array.from(proxyRemovalIds.values())))
})

/**
 * {
    "kind": "call",
    "name": "Multisig.as_multi",
    "call": {
        "args": {
            "call": {
                "__kind": "Proxy",
                "value": {
                    "__kind": "create_pure",
                    "delay": 0,
                    "index": 0,
                    "proxyType": {
                        "__kind": "Any"
                    }
                }
            },
            "maxWeight": {
                "proofSize": "0",
                "refTime": "182470554"
            },
            "maybeTimepoint": {
                "height": 3152562,
                "index": 2
            },
            "otherSignatories": [
                "0x4e66461fed55e8de6988270d17e18f29a5c3fb0fc6ca39f9a9f41bff01510665",
                "0x7c6bb0cfc976a5a68c6493c963ac05427423d37d4a21f3d5a589bbe0756b3b59"
            ],
            "threshold": 2
        },
        "error": null,
        "id": "0003152630-000002-fbff3",
        "name": "Multisig.as_multi",
        "origin": {
            "__kind": "system",
            "value": {
                "__kind": "Signed",
                "value": "0xac7ca845f847034cc513751b2e1a95db412f85acfa607305bcaa017d09029e6e"
            }
        },
        "pos": 42,
        "success": true
    },
    "extrinsic": {
        "error": null,
        "hash": "0x2ccf3675713d39c4b0e49ec05609aea20e006c8123838b08c2e7f15d537f4397",
        "id": "0003152630-000002-fbff3",
        "indexInBlock": 2,
        "pos": 43,
        "signature": {
            "address": {
                "__kind": "Id",
                "value": "0xac7ca845f847034cc513751b2e1a95db412f85acfa607305bcaa017d09029e6e"
            },
            "signature": {
                "__kind": "Sr25519",
                "value": "0x14b5ba1f127f1ad047199a483f6a17dcbb225008206bca1336c2b5bd4aa5797af6ffb2faabf04574a0d25c24ad2dd0f56418e59b6d551f3f8cec494b864feb8a"
            },
            "signedExtensions": {
                "ChargeTransactionPayment": "0",
                "CheckMortality": {
                    "__kind": "Mortal37",
                    "value": 3
                },
                "CheckNonce": 0
            }
        },
        "success": true,
        "version": 4,
        "fee": "70756889",
        "tip": "0",
        "call": {
            "args": {
                "call": {
                    "__kind": "Proxy",
                    "value": {
                        "__kind": "create_pure",
                        "delay": 0,
                        "index": 0,
                        "proxyType": {
                            "__kind": "Any"
                        }
                    }
                },
                "maxWeight": {
                    "proofSize": "0",
                    "refTime": "182470554"
                },
                "maybeTimepoint": {
                    "height": 3152562,
                    "index": 2
                },
                "otherSignatories": [
                    "0x4e66461fed55e8de6988270d17e18f29a5c3fb0fc6ca39f9a9f41bff01510665",
                    "0x7c6bb0cfc976a5a68c6493c963ac05427423d37d4a21f3d5a589bbe0756b3b59"
                ],
                "threshold": 2
            },
            "error": null,
            "id": "0003152630-000002-fbff3",
            "name": "Multisig.as_multi",
            "origin": {
                "__kind": "system",
                "value": {
                    "__kind": "Signed",
                    "value": "0xac7ca845f847034cc513751b2e1a95db412f85acfa607305bcaa017d09029e6e"
                }
            },
            "pos": 42,
            "success": true
        }
    }
}
 */
