import { SignClientTypes } from '@walletconnect/types'
import { useCallback, useEffect } from 'react'
import { Web3WalletTypes } from '@walletconnect/web3wallet'
import { POLKADOT_SIGNING_METHODS } from '../constants'
import { useWalletConnect } from '../contexts/WalletConnectContext'
import { useModals } from '../contexts/ModalsContext'
import { useGetWalletConnectNamespace } from './useWalletConnectNamespace'

export default function useWalletConnectEventsManager() {
  const { web3wallet } = useWalletConnect()
  const { openWalletConnectSessionModal, onOpenWalletConnectSigning } = useModals()
  const { currentNamespace } = useGetWalletConnectNamespace()

  // Open session proposal modal for confirmation / rejection
  const onSessionProposal = useCallback(
    (proposal: SignClientTypes.EventArguments['session_proposal']) => {
      console.info('WalletConnect session_proposal', proposal)
      openWalletConnectSessionModal({ sessionProposal: proposal })
    },
    [openWalletConnectSessionModal]
  )

  const onAuthRequest = useCallback((request: Web3WalletTypes.AuthRequest) => {
    console.error('---> WalletConnect AuthRequest not implemented', request)
  }, [])

  // Open request handling modal based on method that was used
  const onSessionRequest = useCallback(
    async (requestEvent: SignClientTypes.EventArguments['session_request']) => {
      if (!web3wallet) {
        console.error('web3Wallet is undefined')
        return
      }
      console.info('WalletConnect session_request', requestEvent)
      const { topic, params } = requestEvent
      const { request } = params
      const requestSession = web3wallet.engine.signClient.session.get(topic)

      switch (request.method) {
        case POLKADOT_SIGNING_METHODS.POLKADOT_SIGN_MESSAGE:
        case POLKADOT_SIGNING_METHODS.POLKADOT_SIGN_TRANSACTION:
          if (requestEvent.params.chainId !== currentNamespace) {
            console.error(
              "The chain from WalletConnect doesn't match with the current. Switch to the right network."
            )
            return
          }

          if (request.params.transactionPayload) {
            onOpenWalletConnectSigning(requestEvent)
          }
          break

        default:
          console.log('Session Unsuported Method Modal', requestEvent, requestSession)
          return null
      }
    },
    [currentNamespace, onOpenWalletConnectSigning, web3wallet]
  )

  useEffect(() => {
    if (web3wallet) {
      // sign
      web3wallet.on('session_proposal', onSessionProposal)
      web3wallet.on('session_request', onSessionRequest)
      // auth
      web3wallet.on('auth_request', onAuthRequest)
      // session deleted
      web3wallet.on('session_delete', (data) => console.log('session deleted', data))
    }
  }, [onSessionProposal, onSessionRequest, onAuthRequest, web3wallet])
}
