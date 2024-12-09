import { DataHandlerContext, SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { Store, TypeormDatabase } from '@subsquid/typeorm-store'
import { handleMultisigCall } from './multisigCalls'
import {
  getMultisigAddress,
  getMultisigCallId,
  getOriginAccount,
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
import { getProxyAccountIByDelegatorIds } from './util/getProxyAccountIByDelegatorIds'
import { KillPureCallInfo, getProxyKillPureArgs } from './util/getProxyKillPureArgs'
import { handleProxyKillPure } from './processorHandlers/handleProxyKillPure'

const supportedMultisigCalls = [
  'Multisig.as_multi',
  'Multisig.approve_as_multi',
  'Multisig.cancel_as_multi',
  'Multisig.as_multi_threshold_1'
]

const supportedProxyCalls = ['Proxy.proxy', 'Proxy.remove_proxies', 'Proxy.kill_pure']
const supportedCalls = [...supportedProxyCalls, ...supportedMultisigCalls]

const supportedEvents = [
  'Proxy.PureCreated',
  'Proxy.AnonymousCreated',
  'Proxy.ProxyAdded',
  'Proxy.ProxyRemoved'
]

export const env = new Env().getEnv()
const chainId = env.chainId

export const fields = {
  call: {
    args: true,
    origin: true,
    success: true
  },
  event: {
    args: true
  },
  block: { timestamp: true }
}

const processor = new SubstrateBatchProcessor()
  .setRpcEndpoint({ url: env.rpcWs, maxBatchCallSize: 1 })
  .setBlockRange({
    from: Number(env.blockstart)
  })
  .setFields(fields)
  .addCall({
    name: supportedCalls
  })
  .addEvent({
    name: supportedEvents
  })

!!env.gatewayUrl && processor.setGateway(env.gatewayUrl)

export type Ctx = DataHandlerContext<Store, typeof fields>

processor.run(
  new TypeormDatabase({ stateSchema: chainId, isolationLevel: 'READ COMMITTED' }),
  async (ctx) => {
    const newMultisigsInfo: NewMultisigsInfo[] = []
    const newPureProxies: Map<string, NewPureProxy> = new Map()
    const newMultisigCalls: MultisigCallInfo[] = []
    const newProxies: Map<string, NewProxy> = new Map()
    const proxyRemovalIds: Set<string> = new Set()
    const delegatorToRemoveIds: Set<string> = new Set()
    const pureToKill: KillPureCallInfo[] = []

    for (const block of ctx.blocks) {
      const { calls, events, header } = block
      const blockNumber = block.header.height

      const timestamp = new Date(header.timestamp || 0)
      for (const call of calls) {
        // we only care about the successful actions and the ones signed
        if (!call.success || !call.origin) continue

        if (supportedMultisigCalls.includes(call.name)) {
          const signer = getOriginAccount(call.origin)

          const { otherSignatories, threshold } = handleMultisigCall(call.args)
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
          const blockHash = block.header.hash

          newMultisigCalls.push({
            id: getMultisigCallId(
              newMulti.address,
              blockNumber,
              call.extrinsicIndex,
              call.id,
              chainId
            ),
            blockHash,
            callIndex: call.extrinsicIndex,
            multisigAddress: newMulti.address,
            timestamp
          })
        }

        if (call.name === 'Proxy.remove_proxies') {
          const signer = getOriginAccount(call.origin)
          const signerAccountId = getAccountId(signer, chainId)

          // If a pure has just been created (in the queue, not persisted yet) and if the pure has called the removeProxies
          // effectively deleting all its delegations, we should remove it from the queue.
          const pureIdToRemove = Array.from(newPureProxies.values()).find(
            ({ pure }) => pure === signer
          )?.id
          pureIdToRemove && newPureProxies.delete(pureIdToRemove)
          // ctx.log.info(`toremove ${JsonLog(pureIdToRemove)}`)
          // ctx.log.info(`new Pure ${JsonLog(Array.from(newPureProxies.entries()))}`)

          // if a proxy has just been added and is in the queue (not persisted in the DB yet)
          // and the delegator has called removeProxies, we should remove it from the queue
          const proxyIdstoRemove = Array.from(newProxies.values())
            .filter(({ delegator }) => delegator === signer)
            .map(({ id }) => id)
          // ctx.log.info(`proxyIdsToRemove ${JsonLog(proxyIdstoRemove)}`)

          proxyIdstoRemove.forEach((id) => {
            newProxies.delete(id)
          })

          // We will check in the DB if this account is the delegator
          // for any other account, and remove the link
          delegatorToRemoveIds.add(signerAccountId)
        }

        if (call.name === 'Proxy.kill_pure') {
          const proxyToKillArgs = getProxyKillPureArgs(call.args)
          Array.from(newPureProxies.values()).forEach(
            ({ creationBlockNumber, extrinsicIndex, who, id }) => {
              if (
                creationBlockNumber === proxyToKillArgs.blockNumber &&
                extrinsicIndex === proxyToKillArgs.extrinsicIndex &&
                proxyToKillArgs.spawner === who
              ) {
                newPureProxies.delete(id)
              }
            }
          )

          pureToKill.push(proxyToKillArgs)
        }
      }

      for (const event of events) {
        if (event.name === 'Proxy.PureCreated' || event.name === 'Proxy.AnonymousCreated') {
          const newPureProxy = getPureProxyInfoFromArgs({
            event,
            chainId,
            ctx,
            isAnonymous: event.name === 'Proxy.AnonymousCreated'
          })
          // ctx.log.info(`pure ${newPureProxy.pure}`)
          // ctx.log.info(`who ${newPureProxy.who}`)

          newPureProxy &&
            newPureProxies.set(newPureProxy.id, {
              ...newPureProxy,
              createdAt: timestamp,
              creationBlockNumber: blockNumber,
              extrinsicIndex: event.extrinsicIndex
            })
        }

        if (event.name === 'Proxy.ProxyAdded') {
          const newProxy = getProxyInfoFromArgs({ event, chainId, ctx })
          // ctx.log.info(`-----> delegator ${newProxy.delegator}`)
          // ctx.log.info(`-----> delegatee ${newProxy.delegatee}`)
          newProxy && newProxies.set(newProxy.id, { ...newProxy, createdAt: timestamp })
        }

        if (event.name === 'Proxy.ProxyRemoved') {
          const proxyRemoval = getProxyInfoFromArgs({ event, chainId, ctx })
          // ctx.log.info(`-----> to remove delegator ${proxyRemoval.delegator}`)
          // ctx.log.info(`-----> to remove delegatee ${proxyRemoval.delegatee}`)
          if (proxyRemoval && newProxies.has(proxyRemoval.id)) {
            newProxies.delete(proxyRemoval.id)
            // ctx.log.info(`<----- remove from set ${proxyRemoval.id}`)
          } else {
            proxyRemoval && proxyRemovalIds.add(proxyRemoval.id)
            // ctx.log.info(`<----- remove queue ${proxyRemoval.id}`)
          }
        }
      }
    }

    // before adding any proxy we should remove the ones that were marked to be deleted
    // because removeProxies was called
    if (delegatorToRemoveIds.size) {
      // check if there are some delegation linked to bulk removal (removeProxies)
      const addToProxyRemoval = await getProxyAccountIByDelegatorIds(
        ctx,
        Array.from(delegatorToRemoveIds)
      )
      // ctx.log.info(`Removing: ${JsonLog(addToProxyRemoval)}`)
      // and add them to the list to remove
      addToProxyRemoval.forEach((id) => proxyRemovalIds.add(id))
    }
    proxyRemovalIds.size && (await handleProxyRemovals(ctx, Array.from(proxyRemovalIds.values())))
    newMultisigsInfo.length && (await handleNewMultisigs(ctx, newMultisigsInfo, chainId))
    newMultisigCalls.length && (await handleNewMultisigCalls(ctx, newMultisigCalls, chainId))
    pureToKill.length && (await handleProxyKillPure(ctx, pureToKill))
    newPureProxies.size &&
      (await handleNewPureProxies(ctx, Array.from(newPureProxies.values()), chainId))
    newProxies.size && (await handleNewProxies(ctx, Array.from(newProxies.values()), chainId))
  }
)
