import { Injected, InjectedAccount, InjectedAccounts } from '@polkadot/extension-inject/types'
import { timestamp } from 'rxjs'

export interface AuthRequests {
  [idex: number]: { resolve: (value: Injected) => void; reject: (reason?: any) => void }
}

export type EnableRequest = number

export class Extension {
  authRequests: AuthRequests = {}
  accounts: InjectedAccount[] = []
  enableRequests: EnableRequest[] = []

  constructor(accounts: InjectedAccount[]) {
    this.accounts = accounts
  }

  getRequest = () => this.authRequests

  get = () => {
    const timestamp = Date.now()

    return {
      'polkadot-js': {
        enable: new Promise<Injected>((resolve, reject) => {
          this.authRequests[timestamp] = { resolve, reject }
        }),
        version: '1'
      }
    }
  }

  getAuthRequests = () => {
    console.log('ext', this.authRequests)
    return this.authRequests
  }

  enableAuth = (timestamp: number) => {
    this.authRequests[timestamp].resolve({
      accounts: {
        get: () => this.accounts,
        subscribe: (cb) => cb(this.accounts)
      } as unknown as InjectedAccounts,
      signer: {
        signPayload: (payload: any) => {
          return new Promise(() => {})
        }
      }
    })
  }

  rejectAuth = (timestamp: number, reason: string) => {
    this.authRequests[timestamp].reject(reason)
  }
}
