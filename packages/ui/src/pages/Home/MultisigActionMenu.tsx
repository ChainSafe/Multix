import { ButtonWithIcon } from '../../components/library'
import OptionsMenu, { MenuOption } from '../../components/OptionsMenu'
import { HiOutlinePaperAirplane } from 'react-icons/hi2'
import { styled } from '@mui/material/styles'

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
        <ButtonWithIcon
          aria-label="send"
          onClick={() => setIsSendModalOpen(true)}
        >
          <HiOutlinePaperAirplaneStyled />
          Send
        </ButtonWithIcon>
      )}
      <OptionsMenu options={options} />
    </>
  )
}

const HiOutlinePaperAirplaneStyled = styled(HiOutlinePaperAirplane)`
  transform: rotate(315deg);
  margin-top: -4px;
`

export default MultisigActionMenu
