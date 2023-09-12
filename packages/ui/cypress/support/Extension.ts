import { Injected, InjectedAccount, InjectedAccounts } from '@polkadot/extension-inject/types'

export interface AuthRequests {
  [index: number]: {
    id: number
    origin: string
    resolve: (accountAddresses: string[]) => void
    reject: (reason: string) => void
  }
}

export type EnableRequest = number

export class Extension {
  authRequests: AuthRequests = {}
  accounts: InjectedAccount[] = []

  getRequest = () => this.authRequests

  init = (accounts: InjectedAccount[]) => {
    this.accounts = accounts

    return {
      'polkadot-js': {
        enable: (origin: string) => {
          return new Promise<Injected>((resolve, reject) => {
            const timestamp = Date.now()
            const res = (accountAddresses: string[]) => {
              const selectedAccounts = this.accounts.filter(({ address }) =>
                accountAddresses.includes(address)
              )

              resolve({
                accounts: {
                  get: () => selectedAccounts,
                  subscribe: (cb: (accounts: InjectedAccount[]) => void) => cb(selectedAccounts)
                } as unknown as InjectedAccounts,
                signer: {
                  signPayload: (payload: any) => {
                    return new Promise(() => {})
                  }
                }
              })
            }

            const rej = (reason: string) => reject(new Error(reason))

            this.authRequests[timestamp] = { id: timestamp, origin, resolve: res, reject: rej }
          })
        },
        version: '1'
      }
    }
  }

  getAuthRequests = () => {
    return this.authRequests
  }

  enableAuth = (id: number, accountAddresses: string[]) => {
    this.authRequests[id].resolve(accountAddresses)
  }

  rejectAuth = (id: number, reason: string) => {
    this.authRequests[id].reject(reason)
  }
}
