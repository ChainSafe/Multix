import { Injected, InjectedAccount, InjectedAccounts } from '@polkadot/extension-inject/types'
import { timestamp } from 'rxjs'

export interface AuthRequests {
  [idex: number]: {
    origin: string
    resolve: (value: Injected) => void
    reject: (reason?: any) => void
  }
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
    return {
      'polkadot-js': {
        enable: (origin: string) => {
          console.log('got a request from', origin, timestamp)

          return new Promise<Injected>((resolve, reject) => {
            const timestamp = Date.now()
            const res = () => {
              console.log('--> called REsolve')

              resolve({
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

            this.authRequests[timestamp] = { origin, resolve: res, reject }
          })
        },
        version: '1'
      }
    }
  }

  getAuthRequests = () => {
    console.log('ext', this.authRequests)
    return this.authRequests
  }

  enableAuth = (timestamp: number) => {
    this.authRequests[timestamp].resolve = () => {
      console.log('--> called REsolve')
      return {
        accounts: {
          get: () => this.accounts,
          subscribe: (cb) => cb(this.accounts)
        } as unknown as InjectedAccounts,
        signer: {
          signPayload: (payload: any) => {
            return new Promise(() => {})
          }
        }
      }
    }
  }

  rejectAuth = (timestamp: number, reason: string) => {
    this.authRequests[timestamp].reject(reason)
  }
}
