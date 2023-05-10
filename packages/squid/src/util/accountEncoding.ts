import * as ss58 from '@subsquid/ss58';
import { env } from '../processor';

export function encodeId(id: Uint8Array): string {
  return ss58.codec(env.prefix).encode(id);
}
