import { useEffect, useState } from 'react'
import { useApi } from '../contexts/ApiContext'
import { DeriveAccountInfo, DeriveAccountRegistration } from '@polkadot/api-derive/types'

export const useIdentity = (address: string) => {
  const { api } = useApi()
  const [identity, setIdentity] = useState<DeriveAccountRegistration | null>(null)

  console.log('identidy', identity)
  useEffect(() => {
    if (!api) {
      return
    }

    let unsubscribe: () => void

    api.derive.accounts
      .info(address, (info: DeriveAccountInfo) => {
        setIdentity(info.identity)
      })
      .then((unsub) => {
        unsubscribe = unsub
      })
      .catch((e) => console.error(e))

    return () => unsubscribe && unsubscribe()
  }, [address, api])

  return identity
}
