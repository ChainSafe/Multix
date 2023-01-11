import {BatchContext, SubstrateBlock} from '@subsquid/substrate-processor'

export function handleBurn(сtx: BatchContext<unknown, unknown>, args: string[]): BurnEvent {
    return {
        type: 'BURN',
        data: {
            id: args[0],
        },
    }
}

interface MintNFTData {
    collection: string
    symbol: string
    transferable: number
    sn: string
    metadata: string
}

export function handleMint(
    сtx: BatchContext<unknown, unknown>,
    args: string[],
    signer: string,
    block: number
): MintEvent {
    let payloadStr = decodeURIComponent(args[0])
    let {collection, symbol, transferable, sn, metadata} = JSON.parse(payloadStr) as MintNFTData

    return {
        type: 'MINT',
        data: {
            id: `${block}-${collection}-${symbol}-${sn}`,
            symbol,
            sn,
            metadata,
            collection,
            transferable: !!transferable,
            owner: isRmrkId(args[1]) ? signer : args[1] || signer,
            parent: isRmrkId(args[1]) ? args[1] : undefined,
        },
    }
}

export function handleSend(сtx: BatchContext<unknown, unknown>, args: string[]): TransferEvent {
    return {
        type: 'TRANSFER',
        data: {
            id: args[0],
            newOwner: isRmrkId(args[1]) ? undefined : args[1],
            newParent: isRmrkId(args[1]) ? args[1] : undefined,
        },
    }
}

export function handleBuy(сtx: BatchContext<unknown, unknown>, args: string[], signer: string): TransferEvent {
    return {
        type: 'TRANSFER',
        data: {
            id: args[0],
            newOwner: isRmrkId(args[1]) ? signer : args[1] || signer,
            newParent: isRmrkId(args[1]) ? args[1] : undefined,
        },
    }
}

interface TransferEvent {
    type: 'TRANSFER'
    data: {
        id: string
        newOwner: string | undefined
        newParent: string | undefined
    }
}

interface MintEvent {
    type: 'MINT'
    data: {
        id: string
        symbol: string
        sn: string
        metadata: string
        collection: string
        transferable: boolean
        owner: string
        parent: string | undefined
    }
}

interface BurnEvent {
    type: 'BURN'
    data: {
        id: string
    }
}

export type RmrkEvent = TransferEvent | MintEvent | BurnEvent

function isRmrkId(id: string) {
    return /^\d+-.+-.+-.+-\d+$/.test(id)
}
