import AccountDisplay from '../../components/AccountDisplay'
import { AccountBadge } from '../../types'
import MultisigActionMenu from './MultisigActionMenu'
import { renderMultisigHeading } from '../multisigHelpers'
import { Chip, Paper } from '@mui/material'
import { MultiProxy } from '../../contexts/MultiProxyContext'
import { styled } from '@mui/material/styles'
import { MenuOption } from '../../components/OptionsMenu'
import { useMemo } from 'react'
import { HiOutlinePencil } from 'react-icons/hi2'
import { MdOutlineLockReset as LockResetIcon } from 'react-icons/md'

interface PureProxyViewProps {
  className?: string
  multiProxy: MultiProxy
  setIsSendModalOpen: (isOpen: boolean) => void
  selectedHasProxy: boolean
  selectedIsWatched: boolean
  setIsEditModalOpen: (isOpen: boolean) => void
  setIsChangeMultiModalOpen: (isOpen: boolean) => void
}

const PureProxyView = ({
  multiProxy,
  selectedHasProxy,
  selectedIsWatched,
  setIsSendModalOpen,
  setIsEditModalOpen,
  setIsChangeMultiModalOpen
}: PureProxyViewProps) => {
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
    <MultisigWrapperStyled>
      <MultiProxyColumnStyled>
        {selectedHasProxy && (
          <PureHeaderStyled>
            <AccountDisplayStyled
              address={multiProxy?.proxy || ''}
              badge={AccountBadge.PURE}
            />
            <BoxStyled>
              <MultisigActionMenu
                setIsSendModalOpen={setIsSendModalOpen}
                options={options}
                withSendButton={!selectedIsWatched}
              />
            </BoxStyled>
          </PureHeaderStyled>
        )}
        <HeaderStyled>
          <h3>{renderMultisigHeading(multiProxy.multisigs.length > 1)}</h3>
          <BoxStyled>
            {!selectedIsWatched && !selectedHasProxy && (
              <MultisigActionMenu
                setIsSendModalOpen={setIsSendModalOpen}
                options={options}
              />
            )}
          </BoxStyled>
        </HeaderStyled>
        {multiProxy.multisigs.map((multisig) => {
          return (
            <MultisigPaperStyled key={multisig.address}>
              <AccountDisplayWrapperStyled>
                <AccountDisplay
                  iconSize={'large'}
                  address={multisig.address || ''}
                  badge={AccountBadge.MULTI}
                  withBalance
                />
              </AccountDisplayWrapperStyled>
              <SignatoriesWrapperStyled>
                <h4>
                  Signatories{' '}
                  <ChipStyled label={`${multisig.threshold}/${multisig.signatories?.length}`} />
                </h4>
                <AddressListStyled>
                  {multisig?.signatories?.map((signatory) => (
                    <li key={signatory}>
                      <AccountDisplay address={signatory} />
                    </li>
                  ))}
                </AddressListStyled>
              </SignatoriesWrapperStyled>
            </MultisigPaperStyled>
          )
        })}
      </MultiProxyColumnStyled>
    </MultisigWrapperStyled>
  )
}

const AccountDisplayStyled = styled(AccountDisplay)`
  min-width: 0;
  margin-bottom: 0;
`

const MultisigPaperStyled = styled(Paper)`
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
`

const ChipStyled = styled(Chip)`
  background-color: ${({ theme }) => theme.custom.background.primary};
`

const AddressListStyled = styled('ul')`
  padding-inline-start: 0;
  margin-block-end: 0;
  list-style-type: none;
  > li {
    margin-bottom: 1rem;
  }
`

const SignatoriesWrapperStyled = styled('div')`
  & > h2 {
    margin-bottom: 0;
  }
  margin-left: 2rem;
`

const MultisigWrapperStyled = styled('div')`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`

const AccountDisplayWrapperStyled = styled('div')`
  margin: 1rem 0 0 2rem;
`

const MultiProxyColumnStyled = styled('div')`
  flex: 1;
  min-width: 0;

  & > h3 {
    margin-top: 0;
  }
`

const PureHeaderStyled = styled('div')`
  display: flex;
  justify-content: space-between;
  margin: 0 0 1rem 0.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    margin: 0 0 1rem 0;
  }
`

const HeaderStyled = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BoxStyled = styled('div')`
  display: flex;
  align-items: center;
  padding-left: 1rem;
`

export default PureProxyView
