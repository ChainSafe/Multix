import { Binary } from 'polkadot-api'
import json5 from 'json5'

export const JSONprint = (e: unknown) =>
  json5
    .stringify(e, {
      replacer: (_, v) =>
        typeof v === 'bigint' ? v.toString() : v instanceof Binary ? v.asText() : v,
      space: 4
    })
    // remove { and }
    .slice(1, -1)
    // remove trailing comma if any
    .replace(/,\s*$/, '')
