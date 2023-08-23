import { In } from 'typeorm'
import { Account, MultisigCall } from '../model'
import { Ctx } from '../main'
import { getAccountId } from '../util/getAccountId'

export interface MultisigCallInfo extends Omit<MultisigCall, 'multisig'> {
  multisigAddress: string
}

export const handleNewMultisigCalls = async (
  ctx: Ctx,
  newMultisigCalls: MultisigCallInfo[],
  chainId: string
) => {
  const multisigIds = newMultisigCalls.map((multi) => getAccountId(multi.multisigAddress, chainId))
  const multisigCalls: MultisigCall[] = []

  const multisigAccountsMap = await ctx.store
    .findBy(Account, { id: In([...multisigIds]) })
    .then((q) => new Map(q.map((i) => [i.address, i])))

  for (const { blockHash, id, callIndex, multisigAddress, timestamp, callHash } of newMultisigCalls) {
    multisigCalls.push(
      new MultisigCall({
        id,
        blockHash,
        callIndex,
        multisig: multisigAccountsMap.get(multisigAddress),
        timestamp,
        callHash
      })
    )
  }

  await ctx.store.save(multisigCalls)
}
