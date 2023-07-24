import { useState, useContext, createContext } from 'react'

interface HomeModalsContextProps {
  isEditModalOpen: boolean
  setIsEditModalOpen: (isOpen: boolean) => void
  isChangeMultiModalOpen: boolean
  setIsChangeMultiModalOpen: (isOpen: boolean) => void
  isSendModalOpen: boolean
  setIsSendModalOpen: (isOpen: boolean) => void
}

const HomeModalsContext = createContext<HomeModalsContextProps | undefined>(undefined)

const HomeModalsContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isChangeMultiModalOpen, setIsChangeMultiModalOpen] = useState(false)
  const [isSendModalOpen, setIsSendModalOpen] = useState(false)

  return (
    <HomeModalsContext.Provider
      value={{
        isEditModalOpen,
        isChangeMultiModalOpen,
        isSendModalOpen,
        setIsEditModalOpen,
        setIsChangeMultiModalOpen,
        setIsSendModalOpen
      }}
    >
      {children}
    </HomeModalsContext.Provider>
  )
}

const useHomeModals = () => {
  const context = useContext(HomeModalsContext)
  if (context === undefined) {
    throw new Error('useHomeModals must be used within a HomeModalsContextProvider')
  }
  return context
}

export { HomeModalsContextProvider, useHomeModals }
