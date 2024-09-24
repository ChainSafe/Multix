import {
  Alert,
  Box,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { SubmittableExtrinsic } from '@polkadot/api/types'
import { ISubmittableResult } from '@polkadot/types/types'
import React, { ChangeEvent, ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { useApi } from '../../contexts/ApiContext'
import paramConversion from '../../utils/paramConversion'
import { getGlobalMaxValue, inputToBn } from '../../utils'
import BN from 'bn.js'
import { isTypeBalanceWithBalanceCall } from '../../utils/isTypeBalance'

interface Props {
  extrinsicIndex?: string
  className?: string
  onSetExtrinsic: (ext: SubmittableExtrinsic<'promise', ISubmittableResult>, key?: string) => void
  onSetErrorMessage: React.Dispatch<React.SetStateAction<string | ReactNode>>
  onSelectFromCallData: () => void
  hasErrorMessage: boolean
}

interface ParamField {
  name: string
  type: string
  typeName: string
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
  inputParams: [] as any[]
} as FormState

const argIsOptional = (arg: any) => arg.type.toString().startsWith('Option<')

const isNumType = (type: string) => paramConversion.num.includes(type)

const parseFloatOrInt = (value: any) => {
  return value.indexOf('.') >= 0 ? Number.parseFloat(value) : Number.parseInt(value)
}

const handleVector = (val: any, type: string) => {
  return val
    .split(',')
    .map((e: string) => e.trim())
    .map((single: any) => (isNumType(type) ? parseFloatOrInt(single) : single))
}

// create an array of all the params with their type
const processParamValue = (inputParam: any) => {
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
}

const ManualExtrinsic = ({
  className,
  onSetExtrinsic,
  onSetErrorMessage,
  extrinsicIndex,
  onSelectFromCallData,
  hasErrorMessage
}: Props) => {
  const { api, chainInfo } = useApi()
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

  const isValidAmountString = useCallback(
    (value: any) => {
      if (!value.match(/^[0-9]+([.][0-9]+)?$/)) {
        onSetErrorMessage('Only numbers and "." are accepted.')
        return false
      }

      return true
    },
    [onSetErrorMessage]
  )

  const isAmountOverflow = useCallback(
    (bnResult: BN) => {
      if (bnResult.gte(getGlobalMaxValue(128))) {
        onSetErrorMessage('Amount too large')
        return true
      }

      return false
    },
    [onSetErrorMessage]
  )

  const transformParams = useCallback(
    (paramFields: ParamField[], inputParams: any[], opts = { emptyAsNull: true }) => {
      const params = paramFields.map((field, ind) => ({
        ...field,
        value: processParamValue(inputParams[ind])
      }))

      return params.reduce((previousValue, { type = 'string', value, typeName }) => {
        if (value == null || value === '') {
          // if `opts.emptyAsNull` is true, empty param value will be added to res as `null`.
          // otherwise, it will not be added
          return opts.emptyAsNull ? [...previousValue, null] : previousValue
        }

        // Deal with a vector
        if (type.indexOf('Vec<') >= 0) {
          return [...previousValue, handleVector(value, type)]
        }

        // Deal with balance like types where the param needs to
        // be multiplied by the token decimals
        if (isTypeBalanceWithBalanceCall(typeName, `${palletRpc}.${callable}`)) {
          if (!isValidAmountString(value) || !chainInfo?.tokenDecimals) {
            return previousValue
          }

          const bnResult = inputToBn(chainInfo.tokenDecimals, value)

          if (isAmountOverflow(bnResult)) {
            return previousValue
          }

          return [...previousValue, bnResult.toString()]
        }

        if (isNumType(type)) {
          return [...previousValue, parseFloatOrInt(value)]
        }

        return [...previousValue, value]
      }, [] as any[])
    },
    [callable, chainInfo?.tokenDecimals, isAmountOverflow, isValidAmountString, palletRpc]
  )

  useEffect(() => {
    !!paramFields &&
      !!inputParams &&
      setTransformedParams(transformParams(paramFields, inputParams))
  }, [inputParams, paramFields, transformParams])

  const updatePalletRPCs = useCallback(() => {
    if (!api) {
      return
    }
    const apiType = api.tx
    const palletRPCs = Object.keys(apiType)
      .sort()
      .filter((pr) => Object.keys(apiType[pr]).length > 0)
      .map((pr) => ({ key: pr, value: pr, text: pr }))
    setPalletRPCs(palletRPCs)
  }, [api])

  const updateCallables = useCallback(() => {
    if (!api || !palletRpc) {
      return
    }

    const callables = Object.keys(api.tx[palletRpc])
      .sort()
      .map((c) => ({ key: c, value: c, text: c }))
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
      paramFields = metaArgs.map((arg) => {
        // console.log('getTypeDef', getTypeDef(arg.type.toString()))
        // const instance = api.registry.createType(arg.type as unknown as 'u32')
        // console.log('instance', instance)
        // const raw = getTypeDef(instance.toRawType())
        // console.log('raw', raw)

        return {
          name: arg.name.toString(),
          type: arg.type.toString(),
          typeName: arg.typeName.unwrap().toString(),
          optional: argIsOptional(arg)
        }
      })
    }

    setParamFields(paramFields)
  }, [api, callable, palletRpc])

  useEffect(updatePalletRPCs, [updatePalletRPCs])
  useEffect(updateCallables, [updateCallables])
  useEffect(updateParamFields, [updateParamFields])

  const onClickSelectFromCallData = useCallback(() => {
    onSelectFromCallData()
  }, [onSelectFromCallData])

  const onPalletCallableParamChange = useCallback(
    (event: SelectChangeEvent<string>, state: string) => {
      // reset the params
      setTransformedParams(undefined)
      setParamFields(null)
      onSetErrorMessage('')

      setFormState((formState) => {
        const value = event.target.value
        if (state === 'palletRpc') {
          return {
            ...formState,
            [state]: value,
            callable: '',
            inputParams: []
          }
        } else if (state === 'callable') {
          return { ...formState, [state]: value, inputParams: [] }
        }

        return initFormState
      })
    },
    [onSetErrorMessage]
  )

  const onParamChange = useCallback(
    (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      { ind, paramField }: { ind: number; paramField: ParamField }
    ) => {
      onSetErrorMessage('')
      setFormState((formState) => {
        const inputParams = [...formState.inputParams]
        inputParams[ind] = { type: paramField.type, value: event.target.value }
        return { ...formState, inputParams }
      })
    },
    [onSetErrorMessage]
  )

  useEffect(() => {
    if (!api) {
      return
    }

    if (!callable || !palletRpc || !areAllParamsFilled || hasErrorMessage) {
      return
    }

    if (api.tx[palletRpc][callable].meta.args.length !== transformedParams?.length) {
      return
    }

    try {
      const extrinsic = transformedParams
        ? api.tx[palletRpc][callable](...transformedParams)
        : api.tx[palletRpc][callable]()

      !!extrinsic && onSetExtrinsic(extrinsic, extrinsicIndex)
    } catch (e) {
      onSetErrorMessage('Some parameters are invalid.')
      console.error(e)
    }
  }, [
    api,
    areAllParamsFilled,
    callable,
    extrinsicIndex,
    hasErrorMessage,
    onSetErrorMessage,
    onSetExtrinsic,
    palletRpc,
    transformedParams
  ])

  return (
    <Box className={className}>
      <AlertStyled severity="info">
        If this doesn&lsquo;t suit your needs, try{' '}
        <LinkStyled onClick={onClickSelectFromCallData}>
          submitting the extrinsic &quot;From call data&quot;
        </LinkStyled>
        .
      </AlertStyled>
      <FormControl>
        <Select
          data-cy="select-manual-pallet"
          className="palletSelection"
          displayEmpty
          onChange={(event) => onPalletCallableParamChange(event, 'palletRpc')}
          value={palletRpc}
          renderValue={(value) => {
            if (!value) {
              return 'Pallet'
            }

            return value
          }}
        >
          {palletRPCs.map(({ text }) => (
            <MenuItem
              data-cy={`option-pallet-${text}`}
              key={text}
              value={text}
            >
              <div className="pallet">{text}</div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <Select
          data-cy="select-manual-method"
          displayEmpty
          onChange={(event) => onPalletCallableParamChange(event, 'callable')}
          value={callable}
          renderValue={(value) => {
            if (!value) {
              return 'Method'
            }

            return value
          }}
        >
          {callables.map(({ text }) => (
            <MenuItem
              data-cy={`option-method-${text}`}
              key={text}
              value={text}
            >
              <div className="networkName">{text}</div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ul className="paramInputs">
        {paramFields?.map((paramField, ind) => {
          return (
            <li
              key={`${paramField.name}-${paramField.type}`}
              data-cy={`param-field-${paramField.name}`}
            >
              <TextField
                placeholder={paramField.type}
                type="text"
                label={`${paramField.name}${paramField.optional ? ' (optional)' : ''}`}
                value={inputParams[ind] ? inputParams[ind].value : ''}
                onChange={(event) => onParamChange(event, { ind, paramField })}
                InputProps={{
                  endAdornment: isTypeBalanceWithBalanceCall(
                    paramField.typeName,
                    `${palletRpc}.${callable}`
                  ) && (
                    <InputAdornment position="end">{chainInfo?.tokenSymbol || ''}</InputAdornment>
                  )
                }}
                inputProps={{ 'data-cy': `param-input-${paramField.name}` }}
              />
            </li>
          )
        })}
      </ul>
    </Box>
  )
}

const LinkStyled = styled('span')`
  text-decoration: underline;
  cursor: pointer;
`

const AlertStyled = styled(Alert)`
  margin: 0.5rem 0 0.5rem 0;
`

export default styled(ManualExtrinsic)`
  margin-top: 0.5rem;

  .palletSelection {
    margin-right: 0.5rem;
  }

  .paramInputs {
    list-style: none;

    & > li {
      margin-top: 0.5rem;
    }
  }
`
