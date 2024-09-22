import { useEffect, useState } from 'react'
import { useIdenityApi } from './useIdentityApi'
import { FixedSizeBinary, TypedApi } from 'polkadot-api'
import { dotPpl, IdentityData } from '@polkadot-api/descriptors'

export const useIdentity = (address?: string) => {
  const { api } = useIdenityApi()
  const [identity, setIdentity] = useState<Record<string, any> | null>(null)

  useEffect(() => {
    if (!api || !address) {
      return
    }

    const unsub = (api as TypedApi<typeof dotPpl>).query.Identity.IdentityOf.watchValue(
      address,
      'best'
    ).subscribe((val) => {
      const id: Record<string, any> = { judgements: [] }
      val?.[0].judgements.forEach(([, judgement]) => {
        id.judgements.push(judgement.type)
      })
      Object.entries(val?.[0]?.info || {}).forEach(([key, value]) => {
        if ((value as IdentityData)?.type !== 'None') {
          // console.log('key', JSONprint(key));
          // console.log('value', JSONprint(value));
          const text = (value as IdentityData)?.value as FixedSizeBinary<2> | undefined
          if (text) {
            id[key] = text.asText()
          }
        }
      })

      setIdentity(id)
    })

    // api.derive.accounts
    //   .info(address, (info: DeriveAccountInfo) => {
    //     setIdentity(info.identity)
    //   })
    //   .then((unsub) => {
    //     unsubscribe = unsub
    //   })
    //   .catch((e) => console.error(e))

    return () => unsub && unsub.unsubscribe()
  }, [address, api])

  return identity
}
