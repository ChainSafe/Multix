import { Box, FormControl, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import styled from "styled-components";
import { SubmittableExtrinsic } from "@polkadot/api/types";
import { ISubmittableResult } from "@polkadot/types/types";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useApi } from "../../contexts/ApiContext";
import paramConversion from "../../utils/paramConversion";

interface Props {
  className?: string
  from: string
  onSetExtrinsic: (ext: SubmittableExtrinsic<"promise", ISubmittableResult>) => void
  onSetErrorMessage: React.Dispatch<React.SetStateAction<string>>
}

interface ParamField {
  name: string
  type: string
  optional: boolean
}

interface FormState {
  palletRpc: string
  callable: string
  inputParams: any[]
}

const initFormState = {
  palletRpc: '',
  callable: '',
  inputParams: [] as any[],
} as FormState

const argIsOptional = (arg: any) => arg.type.toString().startsWith('Option<')

const transformParams = (
  paramFields: ParamField[],
  inputParams: any[],
  opts = { emptyAsNull: true }
) => {
  // if `opts.emptyAsNull` is true, empty param value will be added to res as `null`.
  // otherwise, it will not be added
  const paramVal = inputParams.map(inputParam => {
    // to cater the js quirk that `null` is a type of `object`.
    if (
      typeof inputParam === 'object' &&
      inputParam !== null &&
      typeof inputParam.value === 'string'
    ) {
      return inputParam.value.trim()
    } else if (typeof inputParam === 'string') {
      return inputParam.trim()
    }
    return inputParam
  })

  const params = paramFields.map((field, ind) => ({
    ...field,
    value: paramVal[ind] || null,
  }))

  return params.reduce((previousValue, { type = 'string', value }) => {
    if (value == null || value === '')
      return opts.emptyAsNull ? [...previousValue, null] : previousValue

    let converted = value

    // Deal with a vector
    if (type.indexOf('Vec<') >= 0) {
      converted = converted.split(',').map((e: string) => e.trim())
      converted = converted.map((single: any) =>
        isNumType(type)
          ? single.indexOf('.') >= 0
            ? Number.parseFloat(single)
            : Number.parseInt(single)
          : single
      )
      return [...previousValue, converted]
    }

    // Deal with a single value
    if (isNumType(type)) {
      converted =
        converted.indexOf('.') >= 0
          ? Number.parseFloat(converted)
          : Number.parseInt(converted)
    }
    return [...previousValue, converted]
  }, [] as any[])
}

const isNumType = (type: string) =>
  paramConversion.num.includes(type)

const ManualExtrinsic = ({ className, onSetExtrinsic, onSetErrorMessage, from }: Props) => {
  const { api, isApiReady, chainInfo } = useApi()
  const [palletRPCs, setPalletRPCs] = useState<any[]>([])
  const [callables, setCallables] = useState<any[]>([])
  const [paramFields, setParamFields] = useState<ParamField[] | null>(null)
  const [formState, setFormState] = useState(initFormState)
  const { palletRpc, callable, inputParams } = formState
  const [transformedParams, setTransformedParams] = useState<any>()
  const areAllParamsFilled = useMemo(() => {
    if (paramFields === null) {
      // it hasn't been initialized yet
      return false
    }

    if (paramFields.length === 0) {
      return true
    }

    return paramFields?.every((paramField, ind) => {
      const param = inputParams[ind]
      if (paramField.optional) {
        return true
      }
      if (param == null) {
        return false
      }

      const value = typeof param === 'object' ? param.value : param
      return value !== null && value !== ''
    })
  }, [inputParams, paramFields])

  useEffect(() => {
    !!paramFields?.length && !!inputParams.length && setTransformedParams(transformParams(paramFields, inputParams))
  }, [inputParams, paramFields])

  const updatePalletRPCs = useCallback(() => {
    if (!api) {
      return
    }
    const apiType = api.tx
    const palletRPCs = Object.keys(apiType)
      .sort()
      .filter(pr => Object.keys(apiType[pr]).length > 0)
      .map(pr => ({ key: pr, value: pr, text: pr }))
    setPalletRPCs(palletRPCs)
  }, [api])

  const updateCallables = useCallback(() => {
    if (!api || !palletRpc) {
      return
    }

    const callables = Object.keys(api.tx[palletRpc])
      .sort()
      .map(c => ({ key: c, value: c, text: c }))
    setCallables(callables)
  }, [api, palletRpc])

  const updateParamFields = useCallback(() => {
    if (!api || !palletRpc || !callable) {
      setParamFields(null)
      return
    }

    let paramFields: ParamField[] = []
    const metaArgs = api.tx[palletRpc][callable].meta.args

    if (metaArgs && metaArgs.length > 0) {
      paramFields = metaArgs.map(arg => ({
        name: arg.name.toString(),
        type: arg.type.toString(),
        optional: argIsOptional(arg),
      }))
    }

    setParamFields(paramFields)
  }, [api, callable, palletRpc])

  useEffect(updatePalletRPCs, [updatePalletRPCs])
  useEffect(updateCallables, [updateCallables])
  useEffect(updateParamFields, [updateParamFields])

  const onPalletCallableParamChange = useCallback((event: SelectChangeEvent<string>, state: string) => {
    // reset the params
    setParamFields(null)
    onSetErrorMessage("")

    setFormState(formState => {
      const value = event.target.value
      if (state === 'palletRpc') {
        return { ...formState, [state]: value, callable: '', inputParams: [] }
      } else if (state === 'callable') {
        return { ...formState, [state]: value, inputParams: [] }
      }

      return initFormState
    })
  }, [])

  const onParamChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, { ind, paramField }: { ind: number, paramField: ParamField }) => {
    onSetErrorMessage("")
    setFormState(formState => {
      const inputParams = [...formState.inputParams]
      inputParams[ind] = { type: paramField.type, value: event.target.value }
      return { ...formState, inputParams }
    })
  }, [])

  useEffect(() => {
    if (!isApiReady || !api) {
      return
    }


    if (!callable || !palletRpc || !areAllParamsFilled) {
      console.log('Nope <-- areAllParamsFilled', areAllParamsFilled)
      return
    }

    console.log('--> gogo areAllParamsFilled', areAllParamsFilled)

    try {
      const extrinsic = !!transformedParams
        ? api.tx[palletRpc][callable](...transformedParams)
        : api.tx[palletRpc][callable]()

      !!extrinsic && onSetExtrinsic(extrinsic)
    } catch (e) {
      console.error('Error in ManualExtrinsic')
      console.error(e)
      onSetErrorMessage("An error occured")
      console.error(e)
    }

  }, [api, areAllParamsFilled, callable, chainInfo, isApiReady, onSetErrorMessage, onSetExtrinsic, palletRpc, transformedParams])


  return (
    <Box className={className}>
      <FormControl>
        <Select
          className="palletSelection"
          displayEmpty
          onChange={(event) => onPalletCallableParamChange(event, "palletRpc")}
          value={palletRpc}
          renderValue={(value) => {
            if (!value) {
              return "Pallet";
            }

            return value
          }}
        >
          {palletRPCs.map(({ text }) =>
            <MenuItem key={text} value={text} sx={{}}>
              <div className="pallet">{text}</div>
            </MenuItem>
          )}
        </Select>
      </FormControl>
      <FormControl>
        <Select
          displayEmpty
          onChange={(event) => onPalletCallableParamChange(event, "callable")}
          value={callable}
          renderValue={(value) => {
            if (!value) {
              return "Method";
            }

            return value
          }}
        >
          {callables.map(({ text }) =>
            <MenuItem key={text} value={text} sx={{}}>
              <div className="networkName">{text}</div>
            </MenuItem>
          )}
        </Select>
      </FormControl>
      <ul className="paramInputs">
        {paramFields?.map((paramField, ind) => (
          <li key={`${paramField.name}-${paramField.type}`}>
            <TextField
              placeholder={paramField.type}
              type="text"
              label={`${paramField.name}${paramField.optional ? " (optional)" : ""}`}
              value={inputParams[ind] ? inputParams[ind].value : ''}
              onChange={(event) => onParamChange(event, { ind, paramField })}
            />
          </li>
        ))}
      </ul>
    </Box >
  )
}


export default styled(ManualExtrinsic)(({ theme }) => `
    .palletSelection {
        margin-right: .5rem;
    }

    .paramInputs {
      list-style: none;
      
      & > li {
        margin-top: 0.5rem;
      }
    }
`)