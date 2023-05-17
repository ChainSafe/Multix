import { styled } from '@mui/material/styles'
import { Center } from '../components/layout/Center'
import { Box } from '@mui/material'
import { chainsafeSVG } from '../logos/chainsafeSVG'
import { w3fSvg } from '../logos/w3fSVG'
import { chainsPolkadotCircleSVG } from '../logos/polkadot-circleSVG'

interface Props {
  className?: string
}

const About = ({ className }: Props) => {
  return (
    <Center className={className}>
      <h1>Multix values</h1>
      <ul className="values">
        <li>
          <h2>Open</h2>
          <p>
            Multix is open-source from the get-go. The back-end and front-end code can be{' '}
            <a
              href="https://github.com/ChainSafe/Multix"
              target="_blank"
              rel="noreferrer"
            >
              found on GitHub
            </a>
            .
          </p>
        </li>
        <li>
          <h2>Permissionless</h2>
          <p>
            The is no permissioned database behind Multix. Any information shown comes from the
            chain.
          </p>
        </li>
        <li>
          <h2>Interoperable</h2>
          Multix doesn't create a walled garden. You can create a multisig on-chain anywhere, Multix
          will show it right away.
        </li>
        <li>
          <h2>Privacy-preserving</h2>
          <p>
            We do not gather private information. Additional information such as names is stored on
            your browser, and only visible to you.
          </p>
        </li>
      </ul>
      <h1 className="title">
        Built by
        <Box className="logoWrapper">
          <a
            className="link chainsafe"
            target="_blank"
            rel="noreferrer"
            href="https://chainsafe.io"
          >
            <img
              className="logo-chainsafe"
              src={chainsafeSVG}
              alt="chainsafe systems logo"
            />{' '}
            ChainSafe Systems
          </a>
        </Box>
      </h1>
      <h1 className="title">
        Supported by
        <Box className="logoWrapper">
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://web3.foundation"
          >
            <img
              className="logo-w3f"
              src={w3fSvg}
              alt="web 3 foudation logo"
            />
          </a>
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://polkadot.network"
          >
            <img
              className="logo-pokadot"
              src={chainsPolkadotCircleSVG}
              alt="Polkadot logo"
            />
          </a>
        </Box>
      </h1>
    </Center>
  )
}

export default styled(About)`
  .title {
    margin-top: 2rem;
  }

  .values {
    list-style-type: none;

    h2 {
      margin-bottom: 0;
    }
    p {
      margin-top: 0;
    }
  }

  .logoWrapper {
    display: flex;
    align-items: center;
    padding-left: 3rem;
    margin-top: 1rem;
  }

  .link {
    text-decoration: none;
    &.chainsafe {
      display: flex;
      align-items: center;
    }
  }

  .logo-chainsafe {
    max-width: 5rem;
    margin-right: 1rem;
  }

  .logo-w3f {
    min-width: 8rem;
  }

  .logo-pokadot {
    max-width: 5rem;
    margin-left: 1rem;
  }
`
