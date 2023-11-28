import { Injected, InjectedAccounts } from '@polkadot/extension-inject/types'
import { Keyring } from '@polkadot/keyring'
import { InjectedAccountWitMnemonic } from '../fixtures/testAccounts'
import { TypeRegistry } from '@polkadot/types'
import { SignerPayloadJSON } from '@polkadot/types/types'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import { SignerResult } from '@polkadot/api/types'

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
const ss58Format = 2
export class Extension {
  authRequests: AuthRequests = {}
  accounts: InjectedAccountWitMnemonic[] = []
  txRequests: TxRequests = {}
  keyring: Keyring | undefined
  allowedOrigins: Record<string, string[]> = {}

  reset = () => {
    this.authRequests = {}
    this.accounts = []
    this.txRequests = {}
    this.keyring = undefined
    this.allowedOrigins = {}
  }

  init = async (accounts: InjectedAccountWitMnemonic[]) => {
    this.reset()
    this.accounts = accounts
    await cryptoWaitReady()
    this.keyring = new Keyring({ type: 'sr25519', ss58Format })
    accounts.forEach(({ mnemonic }) => {
      // we only add to the keyring the accounts with a known mnemonic
      !!mnemonic && this.keyring?.addFromUri(mnemonic)
    })
  }

  getInjectedEnable = () => {
    return {
      'polkadot-js': {
        enable: (origin: string) => {
          const resolvedObject = (selectedAccounts: InjectedAccountWitMnemonic[]) => ({
            accounts: {
              get: () => selectedAccounts,
              subscribe: (cb: (accounts: InjectedAccountWitMnemonic[]) => void) =>
                cb(selectedAccounts)
            } as unknown as InjectedAccounts,
            signer: {
              signPayload: (payload: SignerPayloadJSON): Promise<SignerResult> => {
                return new Promise<SignerResult>((resolve, reject) => {
                  const id = Date.now()
                  const res = () => {
                    const registry = new TypeRegistry()
                    registry.setSignedExtensions(payload.signedExtensions)
                    const pair = this.keyring?.getPair(payload.address)
                    if (!pair) {
                      console.error(
                        `Pair not found for encoded address ${payload.address}, with keyring:`,
                        this.keyring?.toJson
                      )
                      return
                    }
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

          // this origin has already allowed some accounts
          if (this.allowedOrigins[origin]?.length) {
            // return the list of accounts
            const res = resolvedObject(
              this.accounts.filter(({ address }) => this.allowedOrigins[origin].includes(address))
            )
            return Promise.resolve(res)
          }

          return new Promise<Injected>((resolve, reject) => {
            const timestamp = Date.now()
            const res = (accountAddresses: string[]) => {
              const selectedAccounts = this.accounts.filter(({ address }) =>
                accountAddresses.includes(address)
              )

              // store the allowed accounts for this orgin
              this.allowedOrigins[origin] = accountAddresses

              const res = resolvedObject(selectedAccounts)
              resolve(res)
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
