import { useState, useContext, createContext, useCallback } from 'react'
import ChangeMultisig from '../components/modals/ChangeMultisig'
import EditNames from '../components/modals/EditNames'
import Send from '../components/modals/Send'
import { usePendingTx } from '../hooks/usePendingTx'
import { SignClientTypes } from '@walletconnect/types'
import WCSessionProposal from '../components/modals/WCSessionProposal'

interface ModalsContextProps {
  setIsEditModalOpen: (isOpen: boolean) => void
  setIsChangeMultiModalOpen: (isOpen: boolean) => void
  setIsSendModalOpen: (isOpen: boolean) => void
  openWCModal: ({ sessionProposal }: OpenWCModalParams) => void
}

interface OpenWCModalParams {
  sessionProposal: SignClientTypes.EventArguments['session_proposal']
}

const ModalsContext = createContext<ModalsContextProps | undefined>(undefined)

const ModalsContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isChangeMultiModalOpen, setIsChangeMultiModalOpen] = useState(false)
  const [isSendModalOpen, setIsSendModalOpen] = useState(false)
  const [isWCModalOpen, setIsWCModalOpen] = useState(false)
  const [wCSessionProposal, setWCSessionProposal] = useState<
    OpenWCModalParams['sessionProposal'] | undefined
  >()
  const { refresh } = usePendingTx()
  const onCloseSendModal = useCallback(() => setIsSendModalOpen(false), [setIsSendModalOpen])
  const onCloseEditModal = useCallback(() => setIsEditModalOpen(false), [setIsEditModalOpen])
  const onCloseChangeMultiModal = useCallback(
    () => setIsChangeMultiModalOpen(false),
    [setIsChangeMultiModalOpen]
  )

  const onSuccessSendModal = useCallback(() => {
    onCloseSendModal()
    refresh()
  }, [onCloseSendModal, refresh])

  const onFinalizedSendModal = useCallback(() => {
    refresh()
  }, [refresh])

  const openWCModal = useCallback(({ sessionProposal }: OpenWCModalParams) => {
    setWCSessionProposal(sessionProposal)
    setIsWCModalOpen(true)
  }, [])

  const onCloseWCModal = useCallback(() => {
    setIsWCModalOpen(false)
  }, [])

  return (
    <ModalsContext.Provider
      value={{
        setIsEditModalOpen,
        setIsChangeMultiModalOpen,
        setIsSendModalOpen,
        openWCModal
      }}
    >
      {children}
      {isSendModalOpen && (
        <Send
          onClose={onCloseSendModal}
          onSuccess={onSuccessSendModal}
          onFinalized={onFinalizedSendModal}
        />
      )}
      {isEditModalOpen && <EditNames onClose={onCloseEditModal} />}
      {isChangeMultiModalOpen && <ChangeMultisig onClose={onCloseChangeMultiModal} />}
      {isWCModalOpen && (
        <WCSessionProposal
          onClose={onCloseWCModal}
          sessionProposal={wCSessionProposal}
        />
      )}
    </ModalsContext.Provider>
  )
}

const useModals = () => {
  const context = useContext(ModalsContext)
  if (context === undefined) {
    throw new Error('useModals must be used within a ModalsContextProvider')
  }
  return context
}

export { ModalsContextProvider, useModals }
