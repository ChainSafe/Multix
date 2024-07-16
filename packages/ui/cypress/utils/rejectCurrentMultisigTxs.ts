import { cryptoWaitReady } from '@polkadot/util-crypto'
import { InjectedAccountWitMnemonic } from '../fixtures/testAccounts'
import { Keyring, WsProvider, ApiPromise } from '@polkadot/api'
import { MultisigStorageInfo } from '../../src/types'
import { PendingTx } from '../../src/hooks/usePendingTx'
import { SubmittableExtrinsic } from '@polkadot/api/types'
import { ISubmittableResult, AnyTuple, Codec } from '@polkadot/types/types'
import { StorageKey } from '@polkadot/types'

export interface MultisigInfo {
  address: string
  otherSignatories: string[]
  threshold: number
}
const callBack =
  (resolve: (thenableOrResult?: unknown) => void) =>
  ({ status, txHash }: ISubmittableResult) => {
    console.log('Transaction status:', status.type)
    if (status.isBroadcast) {
      console.log('Broadcasted', txHash.toHex())
    }

    if (status.isInBlock) {
      console.log('In block')
    }

    if (status.isFinalized) {
      console.log('Finalized block hash', status.asFinalized.toHex())
      resolve()
    }
  }

const getPendingMultisixTx = (
  multisigTxs: [StorageKey<AnyTuple>, Codec][],
  multisigInfo: MultisigInfo
) => {
  const curratedMultisigTxs: PendingTx[] = []

  multisigTxs.forEach((storage) => {
    // this is supposed to be the multisig address that we asked the storage for
    const multisigFromChain = (storage[0].toHuman() as Array<string>)[0]
    const hash = (storage[0].toHuman() as Array<string>)[1]
    const info = storage[1].toJSON() as unknown as MultisigStorageInfo

    // Fix for ghost proposals for https://github.com/polkadot-js/apps/issues/9103
    // These 2 should be the same
    if (multisigFromChain.toLowerCase() !== multisigInfo.address.toLowerCase()) {
      console.error(
        'The onchain call and the one found in the block donot correspond',
        multisigFromChain,
        multisigInfo.address
      )
      return
    }

    curratedMultisigTxs.push({
      hash,
      info,
      from: multisigInfo.address
    })
  })

  return curratedMultisigTxs
}

const getRejectionsTxs = (
  pendingMultisigTxs: PendingTx[],
  account: InjectedAccountWitMnemonic,
  multisigInfo: MultisigInfo,
  api: ApiPromise
) => {
  const allTxs: SubmittableExtrinsic<'promise', ISubmittableResult>[] = []
  pendingMultisigTxs.forEach((pendingMultisigTx) => {
    const depositor = pendingMultisigTx.info.depositor
    if (depositor !== account.address) {
      console.log('multisig tx not proposed by the same account', depositor, account.address)
      return
    }

    const rejectCurrent = api.tx.multisig.cancelAsMulti(
      multisigInfo.threshold,
      multisigInfo.otherSignatories,
      pendingMultisigTx.info.when,
      pendingMultisigTx.hash
    )
    allTxs.push(rejectCurrent)
  })

  return allTxs
}

export const rejectCurrentMultisigTxs = ({
  account,
  multisigInfo,
  WSendpoint
}: {
  account: InjectedAccountWitMnemonic
  multisigInfo: MultisigInfo
  WSendpoint: string
}) => {
  // this function takes some time waiting for a finalized block
  // with the removal of all pending tx. We set a max timout of 30s
  return cy.then(
    { timeout: 30000 },
    () =>
      new Cypress.Promise(async (resolve) => {
        await cryptoWaitReady()

        const keyring = new Keyring({ type: 'sr25519' })
        keyring.addFromMnemonic(account.mnemonic)

        const wsProvider = new WsProvider(WSendpoint)
        const api = await ApiPromise.create({ provider: wsProvider })

        const multisigTxs = await api.query.multisig.multisigs.entries(multisigInfo.address)
        const pendingMultisigTxs = getPendingMultisixTx(multisigTxs, multisigInfo)

        if (!pendingMultisigTxs.length) {
          console.log('no pending multisig tx for', multisigInfo.address)
          resolve()
          return
        }

        console.log('pendingMultisigTxs', pendingMultisigTxs)

        const allTxs = getRejectionsTxs(pendingMultisigTxs, account, multisigInfo, api)

        console.log(`The multisig has ${allTxs.length} pending txs. Rejecting them now`)

        api.tx.utility
          .batchAll(allTxs)
          .signAndSend(
            keyring.getPair(account.address),
            { withSignedTransaction: true },
            callBack(resolve)
          )
      })
  )
}
