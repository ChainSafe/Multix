import { Box, CircularProgress } from '@mui/material'
import { Button, TextFieldStyled } from './library'
import { useCallback, useState } from 'react'
import { useWalletConnect } from '../contexts/WalletConnectContext'

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
    <Box>
      <TextFieldStyled
        onChange={onUriChange}
        value={uri}
      />
      <Button onClick={onConnect}>{loading ? <CircularProgress size={25} /> : 'Connect'}</Button>
    </Box>
  )
}
