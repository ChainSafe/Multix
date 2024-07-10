import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { SubmittableExtrinsic } from '@polkadot/api/types'
import { ISubmittableResult } from '@polkadot/types/types'
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { TextField } from '../library'
import { useIdentity } from '../../hooks/useIdentity'
import { useCheckBalance } from '../../hooks/useCheckBalance'
import { getErrorMessageReservedFunds } from '../../utils'
import { formatBnBalance } from '../../utils/formatBnBalance'
import { useSetIdentityReservedFunds } from '../../hooks/useSetIdentityReservedFunds'
import { useIdenityApi } from '../../hooks/useIdentityApi'

interface Props {
  className?: string
  from: string
  onSetExtrinsic: (ext?: SubmittableExtrinsic<'promise', ISubmittableResult>) => void
  onSetErrorMessage: React.Dispatch<React.SetStateAction<string | ReactNode>>
}

export type IdentityFields = {
  display: string | undefined
  legal: string | undefined
  web: string | undefined
  riot: string | undefined
  email: string | undefined
  twitter: string | undefined
}

const getRawOrNone = (val: string | undefined) => {
  return val
    ? {
        Raw: val
      }
    : { none: null }
}
const getExtrinsicsArgs = ({ legal, display, email, riot, twitter, web }: IdentityFields) => {
  return {
    additional: [],
    display: getRawOrNone(display),
    legal: getRawOrNone(legal),
    web: getRawOrNone(web),
    riot: getRawOrNone(riot),
    email: getRawOrNone(email),
    pgpFingerprint: null,
    twitter: getRawOrNone(twitter)
  }
}

const fieldNameAndPlaceholder = (fieldName: keyof IdentityFields) => {
  switch (fieldName) {
    case 'display':
      return {
        field: 'Display name',
        placeholder: 'Luke',
        required: true
      }

    case 'legal':
      return {
        field: 'Legal name',
        placeholder: 'Luke Skylwalker',
        required: false
      }

    case 'riot':
      return {
        field: 'Element handle',
        placeholder: '@luke:matrix.org',
        required: false
      }

    case 'web':
      return {
        field: 'Website',
        placeholder: 'https://luke.sky',
        required: false
      }

    case 'twitter':
      return {
        field: 'Twitter/X handle',
        placeholder: '@luke',
        required: false
      }

    case 'email':
      return {
        field: 'Email',
        placeholder: 'hello@luke.sky',
        required: false
      }

    default:
      return {
        field: fieldName,
        placeholder: '',
        required: false
      }
  }
}

const MAX_ALLOWED_VAL_LENGTH = 32

const SetIdentity = ({ className, onSetExtrinsic, from, onSetErrorMessage }: Props) => {
  const { api, chainInfo } = useIdenityApi()
  const [identityFields, setIdentityFields] = useState<IdentityFields | undefined>()
  const chainIdentity = useIdentity(from)
  const [hasChangedAtLeastAField, setHasChangedAtLeastAField] = useState(false)
  const fieldtooLongError = useMemo(() => {
    const res: (keyof IdentityFields)[] = []
    identityFields &&
      Object.entries(identityFields).forEach(([field, value]) => {
        if (typeof value === 'string' && value.length >= MAX_ALLOWED_VAL_LENGTH) {
          res.push(field as keyof IdentityFields)
        }
      })

    return res
  }, [identityFields])

  const { reserved: setIdentityReservedFunds } = useSetIdentityReservedFunds(identityFields)

  const { hasEnoughFreeBalance: hasOriginEnoughFunds } = useCheckBalance({
    min: setIdentityReservedFunds,
    address: from
  })

  useEffect(() => {
    if (fieldtooLongError.length > 0) {
      onSetErrorMessage(`A field exceeds the ${MAX_ALLOWED_VAL_LENGTH} character limit`)
      return
    }

    if (!identityFields?.display && hasChangedAtLeastAField) {
      onSetErrorMessage('Display name is required')
      return
    }

    if (!setIdentityReservedFunds.isZero() && !hasOriginEnoughFunds) {
      const requiredBalanceString = formatBnBalance(
        setIdentityReservedFunds,
        chainInfo?.tokenDecimals,
        { tokenSymbol: chainInfo?.tokenSymbol }
      )

      const reservedString = formatBnBalance(setIdentityReservedFunds, chainInfo?.tokenDecimals, {
        tokenSymbol: chainInfo?.tokenSymbol
      })
      const errorWithReservedFunds = getErrorMessageReservedFunds(
        '"From" account',
        requiredBalanceString,
        reservedString
      )

      onSetErrorMessage(errorWithReservedFunds)
      return
    }

    onSetErrorMessage('')
  }, [
    chainInfo,
    fieldtooLongError,
    hasChangedAtLeastAField,
    hasOriginEnoughFunds,
    identityFields,
    onSetErrorMessage,
    setIdentityReservedFunds
  ])

  useEffect(() => {
    if (chainIdentity) {
      const { display, email, legal, web, riot, twitter } = chainIdentity
      setIdentityFields({
        display,
        legal,
        web,
        riot,
        email,
        twitter
      })
    } else {
      setIdentityFields({
        display: undefined,
        legal: undefined,
        web: undefined,
        riot: undefined,
        email: undefined,
        twitter: undefined
      })
    }
  }, [chainIdentity])

  useEffect(() => {
    if (!api) {
      onSetExtrinsic(undefined)
      return
    }

    if (!identityFields) {
      onSetExtrinsic(undefined)
      return
    }

    if (fieldtooLongError.length > 0) {
      onSetExtrinsic(undefined)
      return
    }

    const extrinsicsArgs = getExtrinsicsArgs(identityFields)
    onSetExtrinsic(api.tx.identity.setIdentity(extrinsicsArgs))
  }, [api, chainInfo, fieldtooLongError, identityFields, onSetErrorMessage, onSetExtrinsic])

  const onChangeField = useCallback((field: keyof IdentityFields, value: string) => {
    setHasChangedAtLeastAField(true)
    setIdentityFields((prev) => (prev ? { ...prev, [field]: value } : undefined))
  }, [])

  return (
    <Grid
      className={className}
      container
      spacing={1}
      data-cy="section-set-identity"
    >
      {identityFields &&
        Object.entries(identityFields).map(([fieldName, value]) => {
          const { field, placeholder, required } = fieldNameAndPlaceholder(
            fieldName as keyof IdentityFields
          )
          const isFieldError = fieldtooLongError.includes(fieldName as keyof IdentityFields)
          const isDiplayNameError = fieldName === 'display' && !value && hasChangedAtLeastAField
          return (
            <Grid
              key={fieldName}
              item
              xs={12}
              sm={6}
              md={6}
              alignItems="center"
            >
              <TextFieldStyled
                data-cy={`set-identity-field-${fieldName}`}
                label={field}
                placeholder={placeholder}
                onChange={(val) =>
                  onChangeField(fieldName as keyof IdentityFields, val.target.value)
                }
                value={value || ''}
                required={required}
                helperText={isFieldError && `Field has more than ${MAX_ALLOWED_VAL_LENGTH} chars`}
                error={isFieldError || isDiplayNameError}
                inputProps={{ 'data-cy': `input-set-identity-field-${fieldName}` }}
              />
            </Grid>
          )
        })}
    </Grid>
  )
}

const TextFieldStyled = styled(TextField)`
  .MuiFormHelperText-root.Mui-error {
    position: initial;
  }
`

export default styled(SetIdentity)`
  margin-top: 0.5rem;
`
