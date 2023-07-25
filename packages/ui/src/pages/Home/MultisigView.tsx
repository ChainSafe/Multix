import AccountDisplay from '../../components/AccountDisplay'
import { AccountBadge } from '../../types'
import { renderMultisigHeading } from '../multisigHelpers'
import MultisigActionMenu from './MultisigActionMenu'
import { styled } from '@mui/material/styles'
import { Chip, Paper } from '@mui/material'
import { useMultiProxy } from '../../contexts/MultiProxyContext'

const MultisigView = () => {
  const { selectedMultiProxy, selectedHasProxy, selectedIsWatched } = useMultiProxy()

  return (
    <>
      <HeaderStyled>
        {selectedMultiProxy && (
          <h3>{renderMultisigHeading(selectedMultiProxy.multisigs.length > 1)}</h3>
        )}
        <BoxStyled>{!selectedIsWatched && !selectedHasProxy && <MultisigActionMenu />}</BoxStyled>
      </HeaderStyled>
      {selectedMultiProxy &&
        selectedMultiProxy.multisigs.map((multisig) => {
          return (
            <MultisigPaperStyled key={multisig.address}>
              <AccountDisplayWrapperStyled>
                <AccountDisplay
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
    </>
  )
}

const HeaderStyled = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AccountDisplayWrapperStyled = styled('div')`
  margin: 1rem 0 0 2rem;
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

const BoxStyled = styled('div')`
  display: flex;
  align-items: center;
  align-self: center;
  padding-left: 1rem;
`

export default MultisigView
