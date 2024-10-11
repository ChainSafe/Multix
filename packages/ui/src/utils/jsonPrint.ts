import { Binary } from 'polkadot-api'

export const JSONprint = (e: unknown) =>
  JSON.stringify(
    e,
    (_, v) => (typeof v === 'bigint' ? v.toString() : v instanceof Binary ? v.asText() : v),
    4
  )
