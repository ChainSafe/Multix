import { Alert, CircularProgress, Grid, styled } from '@mui/material'
import { Button, TextFieldStyled } from '../library'
import React, { useCallback, useMemo, useState } from 'react'
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
        xs={12}
        md={8}
        item
      >
        <Grid
          container
          direction="column"
        >
          <TextFieldStyled
            onChange={onUriChange}
            value={uri}
            placeholder="WalletConnect key..."
            disabled={!canUseWalletConnect}
          />
          <ButtonStyled
            variant="primary"
            disabled={!uri || !canUseWalletConnect}
            onClick={onConnect}
          >
            {loading ? <CircularProgress size={24} /> : 'Connect Dapp'}
          </ButtonStyled>
        </Grid>
      </Grid>
    </Grid>
  )
}

const AlertStyled = styled(Alert)`
  margin-right: 0.5rem;
  border: 0;
`

const ButtonStyled = styled(Button)`
  margin-top: 0.5rem;
`
