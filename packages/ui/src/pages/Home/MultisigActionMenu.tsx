import { Button } from '../../components/library'
import OptionsMenu, { MenuOption } from '../../components/OptionsMenu'

interface MultisigActionMenuProps {
  setIsSendModalOpen: (isOpen: boolean) => void
  options: MenuOption[]
  withSendButton?: boolean
}

const MultisigActionMenu = ({
  setIsSendModalOpen,
  options,
  withSendButton = true
}: MultisigActionMenuProps) => {
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
      <OptionsMenu options={options} />
    </>
  )
}

export default MultisigActionMenu
