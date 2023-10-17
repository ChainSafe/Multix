import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { SubmittableExtrinsic } from '@polkadot/api/types'
import { ISubmittableResult } from '@polkadot/types/types'
import { useCallback, useEffect, useState } from 'react'
import { useApi } from '../../contexts/ApiContext'
import { TextFieldStyled } from '../library'
import { useIdentity } from '../../hooks/useIdentity'

interface Props {
  className?: string
  from: string
  onSetExtrinsic: (ext?: SubmittableExtrinsic<'promise', ISubmittableResult>) => void
}

interface IdentityFields {
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
        field: 'display name',
        placeholder: 'Luke'
      }

    case 'legal':
      return {
        field: 'legal name',
        placeholder: 'Luke Skylwalker'
      }

    case 'riot':
      return {
        field: 'element handle',
        placeholder: '@luke:matrix.org'
      }

    case 'web':
      return {
        field: 'website',
        placeholder: 'https://luke.sky'
      }

    case 'twitter':
      return {
        field: 'twitter/X handle',
        placeholder: '@luke'
      }

    case 'email':
      return {
        field: 'email',
        placeholder: 'hello@luke.sky'
      }

    default:
      return {
        field: fieldName,
        placeholder: ''
      }
  }
}

const SetIdentity = ({ className, onSetExtrinsic, from }: Props) => {
  const { api, chainInfo } = useApi()
  const [identityFields, setIdentityFields] = useState<IdentityFields | undefined>()
  const chainIdentity = useIdentity(from)

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

    const extrinsicsArgs = getExtrinsicsArgs(identityFields)
    onSetExtrinsic(api.tx.identity.setIdentity(extrinsicsArgs))
  }, [api, chainInfo, identityFields, onSetExtrinsic])

  const onChangeField = useCallback((field: keyof IdentityFields, value: string) => {
    setIdentityFields((prev) => (prev ? { ...prev, [field]: value } : undefined))
  }, [])

  return (
    <Grid
      className={className}
      container
      spacing={1}
    >
      {identityFields &&
        Object.entries(identityFields).map(([fieldName, value]) => {
          const { field, placeholder } = fieldNameAndPlaceholder(fieldName as keyof IdentityFields)
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              alignItems="center"
            >
              <TextFieldStyled
                data-cy={`${fieldName}-identity`}
                label={field}
                placeholder={placeholder}
                onChange={(val) =>
                  onChangeField(fieldName as keyof IdentityFields, val.target.value)
                }
                value={value || ''}
              />
            </Grid>
          )
        })}
    </Grid>
  )
}

export default styled(SetIdentity)`
  margin-top: 0.5rem;
`
