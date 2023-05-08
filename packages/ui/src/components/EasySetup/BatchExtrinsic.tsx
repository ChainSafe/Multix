import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SubmittableExtrinsic } from "@polkadot/api/types";
import { ISubmittableResult } from "@polkadot/types/types";
import React, { useCallback, useEffect, useState } from "react";
import { useApi } from "../../contexts/ApiContext";
import ManualExtrinsic from "./ManualExtrinsic";

interface Props {
  className?: string
  onSetExtrinsic: (ext: SubmittableExtrinsic<"promise", ISubmittableResult>) => void
  onSetErrorMessage: React.Dispatch<React.SetStateAction<string>>
}

type CallStack = { [key: string]: SubmittableExtrinsic<"promise", ISubmittableResult> | null }

const BatchExtrinsic = ({ className, onSetExtrinsic, onSetErrorMessage }: Props) => {
  const { api, isApiReady } = useApi()
  const [calls, setCalls] = useState<CallStack>({})

  useEffect(() => {
    const nonNullCalls = Object.values(calls).filter((call) => call !== null)

    if (!!nonNullCalls.length && !!api && !!isApiReady) {
      onSetExtrinsic(api.tx.utility.batch(nonNullCalls))
    }
  }, [api, calls, isApiReady, onSetExtrinsic])

  const setExtrinsicToCall = useCallback((extrinsic: SubmittableExtrinsic<"promise", ISubmittableResult>, extrinsicIndex?: string) => {
    if (!api || !isApiReady || !extrinsicIndex) return

    setCalls((prev) => ({ ...prev, [extrinsicIndex]: extrinsic }))
  }, [api, isApiReady])

  const addExtrinsic = useCallback(() => {
    setCalls({ ...calls, [Date.now()]: null })
  }, [calls])

  return (
    <Box className={className}>
      {Object.keys(calls).map((key) => {
        return <ManualExtrinsic
          key={key}
          extrinsicIndex={key}
          onSetExtrinsic={setExtrinsicToCall}
          onSetErrorMessage={onSetErrorMessage}
        />
      })}
      <Button onClick={addExtrinsic}>Add extrinsic</Button>
    </Box >
  )
}

export default styled(BatchExtrinsic)(({ theme }) => `

`)