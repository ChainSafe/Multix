import { GenericCall } from '@polkadot/types'
import { AnyTuple } from '@polkadot/types/types'

export const getDisplayArgs = (call: GenericCall<AnyTuple> | false | undefined) =>
  call && call.toHuman().args
