import { decodeHex } from '@subsquid/substrate-processor'
// import { MultisigEvent, MultisigInteraction } from './model'
import { encodeId } from './util/accountEncoding'

// export interface MultisigCreationRes {
//     multisigEvent: MultisigEvent;
//     signatories: string[];
//     threshold: number;
// }

// "args": {
//     "call": {
//         "__kind": "Proxy",
//         "value": {
//             "__kind": "create_pure",
//             "delay": 0,
//             "index": 0,
//             "proxyType": {
//                 "__kind": "Any"
//             }
//         }
//     },
//     "maxWeight": {
//         "proofSize": "0",
//         "refTime": "182470554"
//     },
//     "maybeTimepoint": {
//         "height": 3152562,
//         "index": 2
//     },
//     "otherSignatories": [
//         "0x4e66461fed55e8de6988270d17e18f29a5c3fb0fc6ca39f9a9f41bff01510665",
//         "0x7c6bb0cfc976a5a68c6493c963ac05427423d37d4a21f3d5a589bbe0756b3b59"
//     ],
//     "threshold": 2
// },

// export async function handleProxyCreation(
//     ctx: Ctx,
//     signer: string,
//     multisigArgs: any
//     // block: BatchBlock<Item>,
//     // multisigCallIndex: number
// ): Promise<MultisigCreationRes | null> {
//     // const blockNumber = block.header.height

//     // const multisigItem = block.items[multisigCallIndex]
//     // const multisigArgs = multisigItem.kind == "call" && multisigItem.call.name === "Multisig.as_multi" && multisigItem.call.args

//     const encodedOtherSignatories = multisigArgs["otherSignatories"].map((signatory: string) => encodeId(decodeHex(signatory)))
//     return {
//         multisigEvent: new MultisigEvent({
//             id: `multisig-${MultisigInteraction.CREATE}-${blockNumber}`,
//             blockNumber,
//             caller: await getOrCreateAccount(ctx, signer),
//             info: JsonLog(multisigArgs),
//             interaction: MultisigInteraction.CREATE,
//             timestamp: new Date(block.header.timestamp)
//         }),
//         signatories: [signer, ...encodedOtherSignatories],
//         threshold: multisigArgs["threshold"]
//     }
// }

export const handleMultisigCall = (multisigArgs: any) => {
    const encodedOtherSignatories = multisigArgs["otherSignatories"].map((signatory: string) => encodeId(decodeHex(signatory)))

    return {
        otherSignatories: encodedOtherSignatories,
        threshold: multisigArgs["threshold"],
    }
}