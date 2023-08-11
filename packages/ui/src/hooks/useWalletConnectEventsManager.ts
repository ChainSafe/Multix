import { SignClientTypes } from '@walletconnect/types'
import { useCallback, useEffect } from 'react'
import { Web3WalletTypes } from '@walletconnect/web3wallet'
import { POLKADOT_SIGNING_METHODS } from '../constants'
import { useWalletConnect } from '../contexts/WalletConnectContext'
import { useModals } from '../contexts/ModalsContext'
import { useGetWalletConnectNamespace } from './useWalletConnectNamespace'

export default function useWalletConnectEventsManager() {
  const { web3wallet } = useWalletConnect()
  const { openWCModal, onOpenSigningModal } = useModals()
  const { currentNamespace } = useGetWalletConnectNamespace()

  // Open session proposal modal for confirmation / rejection
  const onSessionProposal = useCallback(
    (proposal: SignClientTypes.EventArguments['session_proposal']) => {
      // ModalStore.open('SessionProposalModal', { proposal })
      openWCModal({ sessionProposal: proposal })
    },
    [openWCModal]
  )

  const onAuthRequest = useCallback((request: Web3WalletTypes.AuthRequest) => {
    // ModalStore.open('AuthRequestModal', { request })
    console.log('---> AuthRequestModal', request)
  }, [])

  // Open request handling modal based on method that was used
  const onSessionRequest = useCallback(
    async (requestEvent: SignClientTypes.EventArguments['session_request']) => {
      if (!web3wallet) {
        console.error('web3Wallet is undefined')
        return
      }
      console.log('---> session_request', requestEvent)
      const { topic, params } = requestEvent
      const { request } = params
      // const requestSession = signClient.session.get(topic)
      const requestSession = web3wallet.engine.signClient.session.get(topic)

      switch (request.method) {
        case POLKADOT_SIGNING_METHODS.POLKADOT_SIGN_MESSAGE:
        case POLKADOT_SIGNING_METHODS.POLKADOT_SIGN_TRANSACTION:
          console.log(
            'SessionSignPolkadotModal requestEvent, requestSession',
            requestEvent,
            requestSession
          )
          if (requestEvent.params.chainId !== currentNamespace) {
            console.error(
              "The chain from WC don't match with the current. Switch to the right network"
            )
            return
          }

          if (request.params.transactionPayload) {
            onOpenSigningModal({
              possibleSigners: [],
              proposalData: {
                from: request.params.address,
                timestamp: new Date(),
                callData: request.params.transactionPayload.method
              }
            })
          }
          break
        // ModalStore.open('SessionSignPolkadotModal', { requestEvent, requestSession })

        default:
          console.log('Session Unsuported Method Modal', requestEvent, requestSession)
          return null
      }
    },
    [currentNamespace, onOpenSigningModal, web3wallet]
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
