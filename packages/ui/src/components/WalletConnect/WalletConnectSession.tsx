import { Box, CircularProgress, styled } from '@mui/material'
import { Button, TextFieldStyled } from '../library'
import { useCallback, useState } from 'react'
import { useWalletConnect } from '../../contexts/WalletConnectContext'

export const WalletConnectSession = () => {
  const { pair } = useWalletConnect()
  const [uri, setUri] = useState('')
  const [loading, setLoading] = useState(false)

  const onConnect = useCallback(async () => {
    try {
      setLoading(true)
      await pair({ uri })
    } catch (err: unknown) {
      alert(err)
    } finally {
      setUri('')
      setLoading(false)
    }
  }, [pair, uri])

  const onUriChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUri(event.target.value.trim())
  }, [])

  return (
    <BoxStyled>
      <TextFieldStyled
        onChange={onUriChange}
        value={uri}
        placeholder="WalletConnect key..."
      />
      <ButtonStyled
        disabled={!uri}
        onClick={onConnect}
      >
        {loading ? <CircularProgress size={25} /> : 'Connect Dapp'}
      </ButtonStyled>
    </BoxStyled>
  )
}

const BoxStyled = styled(Box)`
  display: flex;
  align-items: center;
`

const ButtonStyled = styled(Button)`
  margin-left: 1rem;
`
