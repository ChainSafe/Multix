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
  image: string | undefined
  twitter: string | undefined
}

const getRawOrNone = (val: string | undefined) => {
  return val
    ? {
        Raw: val
      }
    : { none: null }
}
const getExtrinsicsArgs = (identity: IdentityFields) => {
  const { legal, display, email, image, riot, twitter, web } = identity

  return {
    additional: [],
    display: getRawOrNone(display),
    legal: getRawOrNone(legal),
    web: getRawOrNone(web),
    riot: getRawOrNone(riot),
    email: getRawOrNone(email),
    pgpFingerprint: null,
    image: getRawOrNone(image),
    twitter: getRawOrNone(twitter)
  }
}

const IdentitySetIdentity = ({ className, onSetExtrinsic, from }: Props) => {
  const { api, chainInfo } = useApi()
  const [identity, setIdentity] = useState<IdentityFields | undefined>()
  const chainIdentity = useIdentity(from)

  useEffect(() => {
    if (chainIdentity) {
      const { display, email, legal, web, riot, twitter, image } = chainIdentity
      setIdentity({
        display,
        legal,
        web,
        riot,
        email,
        image,
        twitter
      })
    } else {
      setIdentity({
        display: undefined,
        legal: undefined,
        web: undefined,
        riot: undefined,
        email: undefined,
        image: undefined,
        twitter: undefined
      })
    }
  }, [chainIdentity])

  useEffect(() => {
    if (!api) {
      onSetExtrinsic(undefined)
      return
    }

    if (!identity) {
      onSetExtrinsic(undefined)
      return
    }

    const extrinsicsArgs = getExtrinsicsArgs(identity)
    onSetExtrinsic(api.tx.identity.setIdentity(extrinsicsArgs))
  }, [api, chainInfo, identity, onSetExtrinsic])

  const onChangeField = useCallback((field: keyof IdentityFields, value: string) => {
    setIdentity((prev) => (prev ? { ...prev, [field]: value } : undefined))
  }, [])

  return (
    <Grid
      className={className}
      container
      spacing={1}
    >
      {identity &&
        Object.entries(identity).map(([fieldName, value]) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            alignItems="center"
          >
            <TextFieldStyled
              data-cy={`${fieldName}-amount`}
              label={fieldName}
              onChange={(val) => onChangeField(fieldName as keyof IdentityFields, val.target.value)}
              value={value || ''}
            />
          </Grid>
        ))}
    </Grid>
  )
}

export default styled(IdentitySetIdentity)`
  margin-top: 0.5rem;
`
