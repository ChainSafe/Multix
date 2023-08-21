import { Button } from '../../components/library'
import OptionsMenu, { MenuOption } from '../../components/OptionsMenu'
import { useMemo } from 'react'
import { HiOutlinePencil } from 'react-icons/hi2'
import { MdOutlineLockReset as LockResetIcon } from 'react-icons/md'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import { useModals } from '../../contexts/ModalsContext'

interface MultisigActionMenuProps {
  withSendButton?: boolean
  withSettingsButton?: boolean
}

const MultisigActionMenu = ({
  withSendButton = true,
  withSettingsButton = true
}: MultisigActionMenuProps) => {
  const { selectedHasProxy, selectedIsWatched } = useMultiProxy()
  const { setIsEditModalOpen, setIsChangeMultiModalOpen, setIsSendModalOpen } = useModals()

  const options: MenuOption[] = useMemo(() => {
    const opts = [
      {
        text: 'Edit names',
        icon: <HiOutlinePencil size={20} />,
        onClick: () => setIsEditModalOpen(true)
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
  }, [selectedHasProxy, selectedIsWatched, setIsChangeMultiModalOpen, setIsEditModalOpen])

  return (
    <>
      {withSendButton && (
        <Button
          variant="primary"
          aria-label="send"
          onClick={() => setIsSendModalOpen(true)}
        >
          New transaction
        </Button>
      )}
      {withSettingsButton && <OptionsMenu options={options} />}
    </>
  )
}

export default MultisigActionMenu
