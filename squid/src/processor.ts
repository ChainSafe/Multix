import { lookupArchive } from '@subsquid/archive-registry'
import { BatchContext, BatchProcessorItem, decodeHex, SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { CallItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Store, TypeormDatabase } from '@subsquid/typeorm-store'
import { In } from 'typeorm'
import { config } from './config'
import { Account, AccountMultisig, Multisig, MultisigCall } from './model/models'
import { SystemRemarkCall } from './types/calls'
import { encodeAddress } from '@polkadot/util-crypto';
import { encodeId } from './util/accountEncoding'
import { handleMultisigCall } from './multisigCalls'
import { getMultisigAddress, getAccountMultisigId, getMultisigCallId, getOrCreateAccounts } from './util'


const processor = new SubstrateBatchProcessor()
    .setDataSource({
        archive: lookupArchive('rococo', { release: 'FireSquid' }),
        chain: 'wss://rococo-rpc.polkadot.io',
    })
    .setBlockRange({
        from: config.blockStart,
    })
    .addCall('System.remark', {
        data: {
            call: {
                args: true,
                origin: true,
            },
        },
    } as const)
    .addCall('Proxy.proxy', {
        data: {
            call: {
                args: true,
                origin: true,
            },
        },
    } as const)
    .addCall('Balances.transfer_keep_alive', {
        data: {
            call: {
                args: true,
                origin: true,
            },
        },
    } as const)
    .addCall('Multisig.as_multi', {
        data: {
            call: {
                args: true,
                origin: true,
            },
            extrinsic: {
                indexInBlock: true
            }
        },
    } as const)
    .addEvent('Proxy.PureCreated', {
        data: {
            event: {
                args: true,
                extrinsic: {
                    hash: true,
                    fee: true
                }
            }
        }
    } as const)

export type Item = BatchProcessorItem<typeof processor>
export type Ctx = BatchContext<Store, Item>

type NewProxies = Map<string, string>
interface NewMultisigsInfo extends Omit<Multisig, "signers" | "proxy" | "multisigsCalls"> {
    signatories: string[]
}
interface MultisigCallInfo extends Omit<MultisigCall, "multisig"> {
    multisigAddress: string
}

processor.run(new TypeormDatabase(), async (ctx) => {
    const newMultisigsInfo: NewMultisigsInfo[] = []
    const newProxies: NewProxies = new Map()
    const multisigCalls: MultisigCallInfo[] = []

    for (let block of ctx.blocks) {
        const { items } = block

        for (let item of items) {
            if (item.name === 'Multisig.as_multi') {
                if (!item.call.success || !item.call.origin) continue

                const signer = getOriginAccountId(item.call.origin)
                const args = item.call.args;

                const { method, otherSignatories, threshold } = handleMultisigCall(args)
                const signers = [signer, ...otherSignatories]
                const timestamp = new Date(block.header.timestamp)

                const newMulti = {
                    id: getMultisigAddress(signers, threshold),
                    threshold: threshold,
                    signatories: signers,
                    createdAt: timestamp
                }

                newMultisigsInfo.push(newMulti)

                const blockNumber = block.header.height
                multisigCalls.push({
                    id: getMultisigCallId(newMulti.id, blockNumber, item.extrinsic.indexInBlock),
                    blockNumber,
                    info: method,
                    multisigAddress: newMulti.id,
                    timestamp
                })

            }

            if (item.name === ("Proxy.PureCreated")) {
                const { pure, who } = item.event.args
                // ctx.log.info(`pure ${pure}`)
                // ctx.log.info(`who ${who}`)

                newProxies.set(encodeAddress(who, config.prefix), encodeAddress(pure, config.prefix))
            }
        }
    }

    newMultisigsInfo.length && await processNewMultisigs(ctx, newMultisigsInfo)
    // newMultisigs.length && await processNewMultisigs(ctx, newMultisigs)
    // multisigEvents.length && await ctx.store.save(multisigEvents)
    newProxies.size && await processNewProxies(ctx, newProxies)
})

// const allNames = getAllBlockNames(block)
// const multisigCallIndex = allNames.indexOf("Multisig.as_multi")
// for (let item of items) {
//     if (item.name === 'System.remark' && multisigCallIndex > -1) {
//         if (!item.call.success || !item.call.origin) continue

//         const signer = getOriginAccountId(item.call.origin)
//         const call = normalizeCall(ctx, item)

//         const [prefix, version, interaction, ...args] = call.message.split('::')

//         // we only support v1 skip current item if it's not the expected version
//         if (prefix !== MULTI_PREFIX || version !== '1') continue

//         switch (interaction) {
//             case MultisigInteraction.CREATE:
//                 const creationRes = await handleMultisigCreation(ctx, signer, block, multisigCallIndex)

//                 if (!creationRes) {
//                     ctx.log.error(`No multisig to create at block ${block.header.height}`)
//                     break;
//                 }

//                 const { multisigEvent, threshold, signatories } = creationRes
//                 multisigEvents.push(multisigEvent)
//                 newMultisigs.push({ threshold, signatories })
//                 break
//         }
//     }

// Get info for first multisig call
// if (item.name === 'Multisig.as_multi') {
// const allNames = items.map((item) => item.name)
// ctx.log.info(allNames)
// ctx.log.info("====> Multisig.asMulti args")
// }

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

//     if (item.name === ("Proxy.PureCreated")) {
//         const { pure, who } = item.event.args
//         // ctx.log.info(`pure ${pure}`)
//         // ctx.log.info(`who ${who}`)

//         newProxies.set(encodeAddress(who, config.prefix), encodeAddress(pure, config.prefix))
//     }
// }
// }

// Proxy.PureCreated {
//     "kind": "event",
//     "name": "Proxy.PureCreated",
//     "event": {
//         "args": {
//             "disambiguationIndex": 0,
//             "proxyType": {
//                 "__kind": "Any"
//             },
//             "pure": "0xea08f32cb2ccf56886b34e23f7b7213c850c3f311850af25d17d02d05d4557ef",
//             "who": "0x9850efab0d23dcce9ad43220d0aa51e8aaeca9e186b105b34d83e782d8dd2f23"
//         },
//         "id": "0003251448-000038-6a873",
//         "name": "Proxy.PureCreated",
//         "pos": 42,
//         "extrinsic": {
//             "hash": "0x5321388ae86726199e5670a53c187e4fc5942630c602130131ebd2514be81775",
//             "id": "0003251448-000002-6a873",
//             "pos": 46,
//             "fee": "42350839"
//         }
//     }
// }


//     newMultisigs.length && await processNewMultisigs(ctx, newMultisigs)
//     multisigEvents.length && await ctx.store.save(multisigEvents)
//     newProxies.size && await processNewProxies(ctx, newProxies)
// })

const processNewMultisigs = async (ctx: Ctx, multisigs: NewMultisigsInfo[]) => {
    for (let { signatories, threshold, id, createdAt } of multisigs) {
        // const multiAddress = encodeAddress(createKeyMulti(signers, threshold), config.prefix)

        // persist all accounts
        const accounts = await getOrCreateAccounts(ctx, signatories)
        // const accounts = await Promise.all(accountPromise)

        const newMultisig = new Multisig({
            id,
            threshold,
            createdAt,
        })

        // persist the multisig
        ctx.store.save(newMultisig)

        const newAccountMultisig = accounts.map((account) => {
            return new AccountMultisig({
                id: getAccountMultisigId(newMultisig.id, account.id),
                multisig: newMultisig,
                signer: account
            })
        })

        ctx.store.save(newAccountMultisig)
    }
}

const processNewProxies = async (ctx: Ctx, proxyMap: NewProxies) => {

    const newProxies = [...proxyMap.values()].map((proxy) => new Account({
        id: proxy,
    }))

    await ctx.store.save(newProxies)

    // ctx.log.info(`proxyMap ${JsonLog([...proxyMap.entries()])}`)

    const multiSigsToUpdate = await ctx.store
        .findBy(Multisig, { id: In([...proxyMap.keys()]) })


    const updatedMultisigs = multiSigsToUpdate
        .map((multi) => {
            const associatedProxy = newProxies.find(proxy => proxy.id === proxyMap.get(multi.id))

            // ctx.log.info(`proxy: ${JsonLog(associatedProxy)}`)
            if (associatedProxy === undefined) {
                ctx.log.error(`No associated proxy found ${newProxies}`)
                return
            }

            multi.proxy = associatedProxy
            // ctx.log.info(`multi: ${JsonLog(multi)}`)
            return multi
        })
        .filter(multi => multi !== undefined)

    await ctx.store.save(updatedMultisigs as Multisig[])
}

// async function processRmrkEvents(ctx: Ctx, rmrkEvents: RmrkEvent[]) {
//     let accountIds = new Set<string>()
//     let nftIds = new Set<string>()
//     for (let e of rmrkEvents) {
//         switch (e.type) {
//             case 'TRANSFER':
//                 if (e.data.newOwner) accountIds.add(e.data.newOwner)
//                 if (e.data.newParent) nftIds.add(e.data.newParent)
//                 nftIds.add(e.data.id)
//                 break
//             case 'MINT':
//                 accountIds.add(e.data.owner)
//                 if (e.data.parent) accountIds.add(e.data.parent)
//                 break
//         }
//     }

//     let accounts = await ctx.store
//         .findBy(Account, { id: In([...accountIds]) })
//         .then((q) => new Map(q.map((i) => [i.id, i])))
//     let nfts = await ctx.store.findBy(RmrkNFT, { id: In([...nftIds]) }).then((q) => new Map(q.map((i) => [i.id, i])))

//     let burnedNfts: string[] = []

//     for (let e of rmrkEvents) {
//         switch (e.type) {
//             case 'TRANSFER': {
//                 let nft = getNft(nfts, e.data.id)
//                 if (!nft) continue

//                 if (e.data.newOwner) {
//                     let owner = getAccount(accounts, e.data.newOwner)
//                     nft.owner = owner
//                 }

//                 if (e.data.newParent) {
//                     let parent = getNft(nfts, e.data.newParent)
//                     nft.parent = parent
//                 }
//                 break
//             }
//             case 'MINT': {
//                 let { owner: ownerId, parent: parentId, ...nftData } = e.data
//                 let nft = new RmrkNFT({
//                     ...nftData,
//                 })
//                 nfts.set(nft.id, nft)

//                 let owner = getAccount(accounts, ownerId)
//                 nft.owner = owner

//                 if (parentId) {
//                     let parent = getNft(nfts, parentId)
//                     nft.owner = owner
//                 }
//                 break
//             }
//             case 'BURN': {
//                 burnedNfts.push(e.data.id)
//                 break
//             }
//         }
//     }

//     await ctx.store.save([...accounts.values()])
//     await ctx.store.save([...nfts.values()])

//     if (burnedNfts.length > 0) {
//         const childNfts = await ctx.store.find(RmrkNFT, {
//             where: { parent: { id: In(burnedNfts) } },
//             relations: { parent: true },
//         })
//         childNfts.forEach((n) => (n.parent = null))
//         await ctx.store.save(childNfts)
//         await ctx.store.remove(RmrkNFT, burnedNfts)
//     }
// }

function normalizeCall(ctx: Ctx, item: CallItem<'System.remark', { call: { args: true } }>) {
    let c = new SystemRemarkCall(ctx, item.call)

    if (c.isV9190) {
        let data = c.asV9190
        return {
            message: Buffer.from(data.remark).toString('utf-8'),
        }
    } else {
        throw new UknownVersionError()
    }
}

// function getAccount(m: Map<string, Account>, id: string): Account {
//     let acc = m.get(id)
//     if (acc == null) {
//         acc = new Account()
//         acc.id = id
//         m.set(id, acc)
//     }
//     return acc
// }

export function getOriginAccountId(origin: any): string {
    if (origin && origin.__kind === 'system' && origin.value.__kind === 'Signed') {
        const id = origin.value.value
        if (id.__kind === 'Id') {
            return encodeId(decodeHex(id.value))
        } else {
            return encodeId(decodeHex(id))
        }
    } else {
        throw new Error('Unexpected origin')
    }
}

class UknownVersionError extends Error {
    constructor() {
        super('Unknown version')
    }
}
