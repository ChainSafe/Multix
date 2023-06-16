import { Alert, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { SubmittableExtrinsic } from '@polkadot/api/types'
import { ISubmittableResult } from '@polkadot/types/types'
import React, { useCallback, useEffect, useState } from 'react'
import { useApi } from '../../contexts/ApiContext'
import { TextFieldStyled } from '../library'
import CallInfo from '../CallInfo'
import { useCallInfoFromCallData } from '../../hooks/useCallInfoFromCallData'
import { HexString } from '../../types'
import { getDisplayArgs, getExtrinsicName } from '../../utils'
import { usePjsLinks } from '../../hooks/usePjsLinks'

interface Props {
  className?: string
  onSetExtrinsic: (ext: SubmittableExtrinsic<'promise', ISubmittableResult>) => void
  onSetErrorMessage: React.Dispatch<React.SetStateAction<string>>
}

const FromCallData = ({ className, onSetExtrinsic, onSetErrorMessage }: Props) => {
  const { api, isApiReady } = useApi()
  const [callData, setCallData] = useState<HexString | undefined>(undefined)
  const [callDataError, setCallDataError] = useState('')
  const { callInfo } = useCallInfoFromCallData(callData)
  const { extrinsicUrl } = usePjsLinks()

  useEffect(() => {
    if (!isApiReady || !api) {
      return
    }

    if (!callData || !callInfo?.call) {
      return
    }

    onSetExtrinsic(api.tx(callInfo.call))
  }, [api, callData, callInfo, isApiReady, onSetExtrinsic])

  const onCallDataChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setCallDataError('')
    setCallData(event.target.value.trim() as HexString)
  }, [])

  return (
    <Box className={className}>
      <AlertStyled severity="info">
        Paste below the "encoded call data" from a{' '}
        <a
          href={extrinsicUrl}
          target="_blank"
          rel="noreferrer"
        >
          manual extrinsic
        </a>
        .<br /> Multix will take care of wrapping it in a multisig/proxy call
      </AlertStyled>
      <TextFieldStyled
        label={`Call data`}
        onChange={onCallDataChange}
        value={callData}
        helperText={callDataError}
        error={!!callDataError}
        fullWidth
      />
      {!!callData && !!callInfo && !callDataError && (
        <CallInfo
          aggregatedData={{
            args: getDisplayArgs(callInfo.call),
            callData,
            name: getExtrinsicName(callInfo.section, callInfo.method)
          }}
          expanded
        />
      )}
    </Box>
  )
}

const AlertStyled = styled(Alert)`
  margin: 0.5rem 0 0.5rem 0;
`
export default FromCallData
