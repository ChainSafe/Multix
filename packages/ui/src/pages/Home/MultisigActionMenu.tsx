import { Button } from '../../components/library'
import OptionsMenu, { MenuOption } from '../../components/OptionsMenu'
import { useMemo } from 'react'
import { HiOutlinePaperAirplane, HiOutlinePencil } from 'react-icons/hi2'
import { MdOutlineLockReset as LockResetIcon } from 'react-icons/md'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import { useModals } from '../../contexts/ModalsContext'
import { HiOutlineArrowTopRightOnSquare as LaunchIcon } from 'react-icons/hi2'
import { useGetSubscanLinks } from '../../hooks/useSubscanLink'

interface MultisigActionMenuProps {
  withSendButton?: boolean
  menuButtonBorder?: CSSStyleDeclaration['border']
}

const MultisigActionMenu = ({
  withSendButton = true,
  menuButtonBorder
}: MultisigActionMenuProps) => {
  const { selectedHasProxy, selectedIsWatched, selectedMultiProxy } = useMultiProxy()
  const { setIsEditModalOpen, setIsChangeMultiModalOpen, setIsSendModalOpen } = useModals()
  const { getSubscanAccountLink } = useGetSubscanLinks()

  const options: MenuOption[] = useMemo(() => {
    const opts = [
      {
        text: 'Edit names',
        icon: <HiOutlinePencil size={20} />,
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

    // allow rotation only for the multisigs with a proxy
    selectedHasProxy &&
      !selectedIsWatched &&
      opts.push({
        text: 'Change multisig',
        icon: <LockResetIcon size={20} />,
        onClick: () => setIsChangeMultiModalOpen(true)
      })

    // If we are NOT rendering "new transaction button", the functionality will appear in the list
    if (!withSendButton) {
      opts.unshift({
        text: 'Send transaction',
        icon: <HiOutlinePaperAirplane size={20} />,
        onClick: () => setIsSendModalOpen(true)
      })
    }

    return opts
  }, [
    withSendButton,
    selectedHasProxy,
    selectedIsWatched,
    getSubscanAccountLink,
    selectedMultiProxy,
    setIsChangeMultiModalOpen,
    setIsEditModalOpen,
    setIsSendModalOpen
  ])

  return (
    <>
      {withSendButton && (
        <Button
          variant="primary"
          aria-label="send"
          onClick={() => setIsSendModalOpen(true)}
        >
          New Transaction
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
