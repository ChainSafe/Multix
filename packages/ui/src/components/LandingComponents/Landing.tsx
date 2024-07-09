import { styled } from '@mui/material'
import { ConnectButtons } from './ConnectButtons'
import { Hero } from './Hero'

export const Landing = () => {
  return (
    <WrapperStyled>
      <Hero>
        <h1 data-cy="header-multix-introduction">
          Multix is an interface to easily manage complex multisigs.
        </h1>
        <div data-cy="label-interaction-prompt">
          Connect a wallet to interact with Multix or watch an account.
        </div>
        <ConnectButtons />
      </Hero>
    </WrapperStyled>
  )
}

const WrapperStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    text-align: center;
  }
`
