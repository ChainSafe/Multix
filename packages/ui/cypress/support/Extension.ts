import { Injected, InjectedAccounts } from '@polkadot/extension-inject/types'
import { Keyring } from '@polkadot/keyring'
import { InjectedAccountWitMnemonic } from '../fixtures/injectedAccounts'
import { TypeRegistry } from '@polkadot/types'
import { SignerPayloadJSON } from '@polkadot/types/types'
import { cryptoWaitReady } from '@polkadot/util-crypto'

export interface AuthRequest {
  id: number
  origin: string
  resolve: (accountAddresses: string[]) => void
  reject: (reason: string) => void
}

export interface TxRequest {
  id: number
  payload: SignerPayloadJSON
  resolve: () => void
  reject: (reason: string) => void
}

export type TxRequests = Record<number, TxRequest>
export type AuthRequests = Record<number, AuthRequest>

export type EnableRequest = number

export class Extension {
  authRequests: AuthRequests = {}
  accounts: InjectedAccountWitMnemonic[] = []
  txRequests: TxRequests = {}
  keyring: Keyring | undefined

  reset = () => {
    this.authRequests = {}
    this.accounts = []
    this.txRequests = {}
    this.keyring = undefined
  }

  init = async (accounts: InjectedAccountWitMnemonic[]) => {
    this.reset()
    this.accounts = accounts
    await cryptoWaitReady()
    this.keyring = new Keyring({ type: 'sr25519' })
    accounts.forEach(({ mnemonic }) => {
      this.keyring.addFromMnemonic(mnemonic)
    })
  }

  getInjectedEnable = () => {
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
                  subscribe: (cb: (accounts: InjectedAccountWitMnemonic[]) => void) =>
                    cb(selectedAccounts)
                } as unknown as InjectedAccounts,
                signer: {
                  signPayload: (payload: SignerPayloadJSON) => {
                    return new Promise((resolve, reject) => {
                      const id = Date.now()
                      const res = () => {
                        console.log('payload', payload)
                        const registry = new TypeRegistry()
                        registry.setSignedExtensions(payload.signedExtensions)
                        const pair = this.keyring.getPair(this.accounts[0].address)
                        const signature = registry
                          .createType('ExtrinsicPayload', payload, {
                            version: payload.version
                          })
                          .sign(pair)
                        resolve({ id, signature: signature.signature })
                      }

                      const rej = (reason: string) => reject(new Error(reason))

                      this.txRequests[id] = { id, payload, resolve: res, reject: rej }
                    })
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

  getTxRequests = () => {
    return this.txRequests
  }

  approveTx = (id: number) => {
    this.txRequests[id].resolve()
  }

  rejectTx = (id: number, reason: string) => {
    this.txRequests[id].reject(reason)
  }
}
