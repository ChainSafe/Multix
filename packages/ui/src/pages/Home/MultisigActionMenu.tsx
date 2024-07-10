import { Button } from '../../components/library'
import OptionsMenu, { MenuOption } from '../../components/OptionsMenu'
import { useMemo } from 'react'
import { MdOutlineLockReset as LockResetIcon } from 'react-icons/md'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import { useModals } from '../../contexts/ModalsContext'
import {
  HiOutlineArrowTopRightOnSquare as LaunchIcon,
  HiOutlineUserPlus as IdentityIcon,
  HiOutlinePencilSquare as PencilIcon
} from 'react-icons/hi2'
import { useGetSubscanLinks } from '../../hooks/useSubscanLink'
import { EasyTransferTitle } from '../../components/modals/Send'
import { useHasIdentityFeature } from '../../hooks/useHasIdentityFeature'

interface MultisigActionMenuProps {
  withNewTransactionButton?: boolean
  menuButtonBorder?: CSSStyleDeclaration['border']
}

const MultisigActionMenu = ({
  withNewTransactionButton = true,
  menuButtonBorder
}: MultisigActionMenuProps) => {
  const { selectedHasProxy, selectedIsWatched, selectedMultiProxy } = useMultiProxy()
  const { setIsEditModalOpen, setIsChangeMultiModalOpen, onOpenSendModal } = useModals()
  const { getSubscanAccountLink } = useGetSubscanLinks()
  const { hasIdentityPallet, hasPplChain } = useHasIdentityFeature()

  const options: MenuOption[] = useMemo(() => {
    const opts = [
      {
        text: 'Edit names',
        icon: <PencilIcon size={20} />,
        onClick: () => setIsEditModalOpen(true)
      },
      {
        text: 'Subscan',
        icon: <LaunchIcon size={20} />,
        onClick: () =>
          window.open(
            selectedMultiProxy?.proxy
              ? getSubscanAccountLink(selectedMultiProxy?.proxy)
              : getSubscanAccountLink(selectedMultiProxy?.multisigs[0].address, true)
          )
      }
    ]

    !selectedIsWatched &&
      !hasPplChain &&
      hasIdentityPallet &&
      opts.push({
        text: 'Set identity',
        icon: <IdentityIcon size={20} />,
        onClick: () => onOpenSendModal(EasyTransferTitle.SetIdentity)
      })
    // allow rotation only for the multisigs with a proxy
    selectedHasProxy &&
      !selectedIsWatched &&
      opts.push({
        text: 'Change multisig',
        icon: <LockResetIcon size={20} />,
        onClick: () => setIsChangeMultiModalOpen(true)
      })

    // If we are NOT rendering "new transaction button" and is it's NOT a Watched account,
    // the "Send transaction" item will appear in the list menu
    // TODO: Individual transaction button for each mulisig
    // if (!withNewTransactionButton && !selectedIsWatched) {
    //   opts.unshift({
    //     text: 'Send transaction',
    //     icon: <HiOutlinePaperAirplane size={20} />,
    //     onClick: () => setIsSendModalOpen(true)
    //   })
    // }

    return opts
  }, [
    selectedIsWatched,
    hasIdentityPallet,
    selectedHasProxy,
    setIsEditModalOpen,
    selectedMultiProxy,
    getSubscanAccountLink,
    onOpenSendModal,
    setIsChangeMultiModalOpen
  ])

  return (
    <>
      {withNewTransactionButton && (
        <Button
          variant="primary"
          aria-label="send"
          onClick={() => onOpenSendModal()}
          data-cy="button-new-transaction"
        >
          New transaction
        </Button>
      )}
      <OptionsMenu
        menuButtonBorder={menuButtonBorder}
        options={options}
      />
    </>
  )
}

export default MultisigActionMenu
