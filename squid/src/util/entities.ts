import { In } from "typeorm"
import { Account } from "../model"
import { Ctx } from "../processor"
import { JsonLog } from "./JsonLog"

export async function getOrCreateAccount(ctx: Ctx, id: string): Promise<Account> {
    let account = await ctx.store.get(Account, id)
    if (!account) {
        account = new Account({
            id
        })
        await ctx.store.insert(account)
    }

    return account
}

export async function getOrCreateAccounts(ctx: Ctx, ids: string[]): Promise<Account[]> {
    const dbAccounts = await ctx.store.findBy(Account, { id: In([...ids]) })

    // ctx.log.info(`db accounts: ${JsonLog(dbAccounts)}`)
    const accountsMap: Map<string, Account> = new Map()
    for (const account of dbAccounts) accountsMap.set(account.id, account)
    const newAccounts: Set<Account> = new Set()
    for (const id of ids) {
        if (accountsMap.has(id)) continue

        const account = new Account({
            id,
        })
        newAccounts.add(account)
    }

    if (newAccounts.size > 0) await ctx.store.save([...newAccounts])

    return [...accountsMap.values(), ...newAccounts]
}