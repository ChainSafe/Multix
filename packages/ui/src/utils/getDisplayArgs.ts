import { Transaction } from 'polkadot-api'

export const getDisplayArgs = (call: Transaction<any, any, any, any> | false | undefined) =>
  call && call.toHuman().args
