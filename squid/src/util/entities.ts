import { In } from 'typeorm'
import { Account } from '../model'
import { Ctx } from '../main'
import { getAccountId } from './getAccountId'
// import { JsonLog } from "./JsonLog"

export async function getOrCreateAccounts(
  ctx: Ctx,
  addresses: string[],
  chainId: string
): Promise<Account[]> {
  const ids = addresses.map((address) => getAccountId(address, chainId))
  const dbAccounts = await ctx.store.findBy(Account, { id: In([...ids]) })

  // ctx.log.info(`db accounts: ${JsonLog(dbAccounts)}`)
  const accountsMap: Map<string, Account> = new Map()
  for (const account of dbAccounts) accountsMap.set(account.id, account)
  const newAccounts: Set<Account> = new Set()
  for (const address of addresses) {
    const id = getAccountId(address, chainId)
    if (accountsMap.has(id)) continue

    const account = new Account({
      id,
      address,
      isMultisig: false,
      isPureProxy: false
    })
    newAccounts.add(account)
  }

  if (newAccounts.size > 0) await ctx.store.save([...newAccounts])

  return [...accountsMap.values(), ...newAccounts]
}
