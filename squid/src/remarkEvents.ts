import { BatchBlock, decodeHex } from '@subsquid/substrate-processor'
import { MultisigEvent, MultisigInteraction } from './model'
import { Ctx, Item } from './processor'
import { encodeId } from './util/accountEncoding'
import { getOrCreateAccount } from './util/entities'
import { JsonLog } from './util/JsonLog'

export interface MultisigCreationRes {
    multisigEvent: MultisigEvent;
    signatories: string[];
    threshold: number;
}

export async function handleMultisigCreation(
    ctx: Ctx,
    signer: string,
    block: BatchBlock<Item>,
    multisigCallIndex: number
): Promise<MultisigCreationRes | null> {
    const blockNumber = block.header.height

    const multisigItem = block.items[multisigCallIndex]
    const multisigArgs = multisigItem.kind == "call" && multisigItem.call.name === "Multisig.as_multi" && multisigItem.call.args

    const encodedOtherSignatories = multisigArgs["otherSignatories"].map((signatory: string) => encodeId(decodeHex(signatory)))
    return {
        multisigEvent: new MultisigEvent({
            id: `multisig-${MultisigInteraction.CREATE}-${blockNumber}`,
            blockNumber,
            caller: await getOrCreateAccount(ctx, signer),
            info: JsonLog(multisigArgs),
            interaction: MultisigInteraction.CREATE,
            timestamp: new Date(block.header.timestamp)
        }),
        signatories: [signer, ...encodedOtherSignatories],
        threshold: multisigArgs["threshold"]
    }
}
