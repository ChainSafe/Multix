import { CallItem } from "@subsquid/substrate-processor/lib/interfaces/dataSelection"
import { Ctx } from "../processor"
import { SystemRemarkCall } from "../types/calls"

export function normalizeCall(ctx: Ctx, item: CallItem<'System.remark', { call: { args: true } }>) {
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

class UknownVersionError extends Error {
    constructor() {
        super('Unknown version')
    }
}