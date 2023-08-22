import AccountDisplay from '../../components/AccountDisplay'
import { AccountBadge } from '../../types'
import MultisigActionMenu from './MultisigActionMenu'
import { styled } from '@mui/material/styles'
import { Chip, Paper } from '@mui/material'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import Accordion from '../../components/library/Accordion'
import { Button } from '../../components/library'
import Balance from '../../components/library/Balance'
import { renderMultisigHeading } from '../multisigHelpers'

const MultisigView = () => {
  const { selectedMultiProxy, selectedHasProxy, selectedIsWatched } = useMultiProxy()

  return (
    <MultisigWrapperStyled>
      {selectedMultiProxy && (
        <h3>
          {selectedHasProxy
            ? 'Controlled by'
            : renderMultisigHeading(selectedMultiProxy.multisigs.length > 1)}
        </h3>
      )}
      {selectedMultiProxy &&
        selectedMultiProxy.multisigs.map((multisig) => {
          return (
            <Accordion
              header={
                <AccountDisplayWrapperStyled>
                  <AccountDisplay
                    address={multisig.address || ''}
                    badge={AccountBadge.MULTI}
                    withBalance={false}
                  />
                  <ChipStyled label={`${multisig.threshold}/${multisig.signatories?.length}`} />
                </AccountDisplayWrapperStyled>
              }
              content={
                <MultisigPaperStyled key={multisig.address}>
                  <BoxStyled>
                    <Button variant="secondary">
                      <Balance address={multisig.address} />
                    </Button>
                    {!selectedIsWatched && !selectedHasProxy && (
                      <MultisigActionMenu withSettingsButton={false} />
                    )}
                  </BoxStyled>
                  <div>
                    <SignatoriesHeadingStyled>Signatories</SignatoriesHeadingStyled>
                    <AddressListStyled>
                      {multisig?.signatories?.map((signatory) => (
                        <li key={signatory}>
                          <AccountDisplay address={signatory} />
                        </li>
                      ))}
                    </AddressListStyled>
                  </div>
                </MultisigPaperStyled>
              }
            />
          )
        })}
    </MultisigWrapperStyled>
  )
}

const MultisigWrapperStyled = styled('div')`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.custom.text.borderColor};
  border-radius: ${({ theme }) => theme.custom.borderRadius};

  h3 {
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
  }

  .MuiPaper-root {
    box-shadow: none;

    &:before {
      display: none;
    }
  }
`

const AccountDisplayWrapperStyled = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ChipStyled = styled(Chip)`
  color: ${({ theme }) => theme.custom.gray[700]};
  font-size: 1rem;
  font-weight: 500;
  background: none;
`

const MultisigPaperStyled = styled(Paper)`
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  box-shadow: none;
  border: 1px solid ${({ theme }) => theme.custom.text.borderColor};
  border-radius: ${({ theme }) => theme.custom.borderRadius};
`

const BoxStyled = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`

const SignatoriesHeadingStyled = styled('h4')`
  color: ${({ theme }) => theme.custom.gray[700]};
  font-size: 1rem;
  font-weight: 400;
  margin: 0.75rem 0;
`

const AddressListStyled = styled('ul')`
  padding-inline-start: 0;
  margin-block-end: 0;
  list-style-type: none;

  > li {
    margin-bottom: 1rem;
  }
`

export default MultisigView
