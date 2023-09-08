import { Alert, CircularProgress, Grid, styled } from '@mui/material'
import { Button, TextFieldStyled } from '../library'
import { useCallback, useMemo, useState } from 'react'
import { useWalletConnect } from '../../contexts/WalletConnectContext'
import { useMultiProxy } from '../../contexts/MultiProxyContext'

export const WalletConnectSession = () => {
  const { pair } = useWalletConnect()
  const [uri, setUri] = useState('')
  const [loading, setLoading] = useState(false)
  const { selectedMultiProxy, selectedIsWatched } = useMultiProxy()
  const canUseWalletConnect = useMemo(
    () => !!selectedMultiProxy && !selectedIsWatched,
    [selectedIsWatched, selectedMultiProxy]
  )
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
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        alignItems="center"
      >
        {!canUseWalletConnect && (
          <AlertStyled
            severity="warning"
            variant="outlined"
          >
            Please first select a Pure or Multisig that you are part of, to be able to use it with
            WalletConnect.
          </AlertStyled>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        alignItems="center"
      >
        <TextFieldStyled
          onChange={onUriChange}
          value={uri}
          placeholder="WalletConnect key..."
          disabled={!canUseWalletConnect}
        />
        <ButtonStyled
          disabled={!uri || !canUseWalletConnect}
          onClick={onConnect}
        >
          {loading ? <CircularProgress size={25} /> : 'Connect Dapp'}
        </ButtonStyled>
      </Grid>
    </Grid>
  )
}

const AlertStyled = styled(Alert)`
  margin-right: 0.5rem;
  border: 0;
`

const ButtonStyled = styled(Button)`
  margin-left: 1rem;
`
