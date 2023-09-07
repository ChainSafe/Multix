import AccountDisplay from '../../components/AccountDisplay'
import { AccountBadge } from '../../types'
import MultisigActionMenu from './MultisigActionMenu'
import { styled } from '@mui/material/styles'
import { Box, Chip } from '@mui/material'
import { useMultiProxy } from '../../contexts/MultiProxyContext'
import Balance from '../../components/library/Balance'
import { renderMultisigHeading } from '../multisigHelpers'
import MultisigAccordion from './MultisigAccordion'

const MultisigView = () => {
  const { selectedMultiProxy, selectedHasProxy, selectedIsWatched } = useMultiProxy()

  return (
    <MultisigViewWrapperStyled>
      <HeaderStyled>
        {selectedMultiProxy && (
          <h3>
            {selectedHasProxy
              ? 'Controlled by'
              : renderMultisigHeading(selectedMultiProxy.multisigs.length > 1)}
          </h3>
        )}
        <BoxStyled>
          <MultisigActionMenu withSendButton={!selectedIsWatched} />
        </BoxStyled>
      </HeaderStyled>
      <MultisigList>
        {selectedMultiProxy &&
          selectedMultiProxy.multisigs.map((multisig) => {
            return (
              <MultisigWrapperStyled key={multisig.address}>
                <AccountDisplayWrapperStyled>
                  <AccountDisplay
                    address={multisig.address || ''}
                    badge={AccountBadge.MULTI}
                    withBalance={false}
                  />
                </AccountDisplayWrapperStyled>
                <List>
                  <ListElement>
                    <ListFieldText>Threshold</ListFieldText>
                    <ChipStyled label={`${multisig.threshold}/${multisig.signatories?.length}`} />
                  </ListElement>
                  <ListElement>
                    <ListFieldText>Balance</ListFieldText>
                    <Balance address={multisig.address} />
                  </ListElement>
                </List>
                <MultisigAccordion multisig={multisig} />
              </MultisigWrapperStyled>
            )
          })}
      </MultisigList>
    </MultisigViewWrapperStyled>
  )
}

const HeaderStyled = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BoxStyled = styled(Box)`
  display: flex;
`

const MultisigList = styled('div')`
  & > :not(:first-of-type) {
    margin-top: 1rem;
  }
`

const MultisigViewWrapperStyled = styled('div')`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.custom.text.borderColor};
  border-radius: ${({ theme }) => theme.custom.borderRadius};

  h3 {
    font-size: 1.125rem;
    font-weight: 400;
    margin-bottom: 0.75rem;
  }

  .MuiPaper-root {
    box-shadow: none;

    &:before {
      display: none;
    }
  }
`

const MultisigWrapperStyled = styled('div')`
  border: 1px solid ${({ theme }) => theme.custom.text.borderColor};
  border-radius: ${({ theme }) => theme.custom.borderRadius};
  padding: 1rem 0.75rem;

  &:not(:first-of-type) {
    margin-bottom: 0.5rem;
  }
`
const List = styled('div')``

const ListElement = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  max-height: 2.4375rem;
  border-radius: ${({ theme }) => theme.custom.borderRadius};
  border: 1px solid ${({ theme }) => theme.custom.gray[400]};
  background: ${({ theme }) => theme.custom.gray[200]};
`

const ListFieldText = styled('div')`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.custom.gray[800]};
`

const AccountDisplayWrapperStyled = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const ChipStyled = styled(Chip)`
  background: none;

  .MuiChip-label {
    color: ${({ theme }) => theme.custom.gray[700]};
    font-size: 1rem;
    font-weight: 400;
    padding-right: 0;
  }
`

export default MultisigView
