import * as ss58 from '@subsquid/ss58'
import { config } from '../config'

export function encodeId(id: Uint8Array): string {
    return ss58.codec(config.prefix).encode(id)
}