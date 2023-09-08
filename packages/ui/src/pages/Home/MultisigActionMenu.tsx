import { Button } from '../../components/library'
import OptionsMenu, { MenuOption } from '../../components/OptionsMenu'
import { useMemo } from 'react'
import { HiOutlinePencil } from 'react-icons/hi2'
import { MdOutlineLockReset as LockResetIcon } from 'react-icons/md'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import { useModals } from '../../contexts/ModalsContext'
import { HiOutlineArrowTopRightOnSquare as LaunchIcon } from 'react-icons/hi2'
import { useGetSubscanLinks } from '../../hooks/useSubscanLink'

interface MultisigActionMenuProps {
  withSendButton?: boolean
}

const MultisigActionMenu = ({ withSendButton = true }: MultisigActionMenuProps) => {
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

    return opts
  }, [
    getSubscanAccountLink,
    selectedHasProxy,
    selectedIsWatched,
    selectedMultiProxy,
    setIsChangeMultiModalOpen,
    setIsEditModalOpen
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
      <OptionsMenu options={options} />
    </>
  )
}

export default MultisigActionMenu
