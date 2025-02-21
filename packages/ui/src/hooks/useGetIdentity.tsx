import { useCallback } from 'react'
import { useIdentityApi } from './useIdentityApi'
import { FixedSizeBinary, TypedApi } from 'polkadot-api'
import { dotPpl, IdentityData, IdentityJudgement } from '@polkadot-api/descriptors'

export interface IdentityInfo extends Record<string, any> {
  judgements: IdentityJudgement['type'][]
  sub?: string
}

export const useGetIdentity = () => {
  const { api } = useIdentityApi()

  const getIdentity = useCallback(
    async (address: string) => {
      if (!api || !address) {
        return
      }

      const { sub, parentAddress } = await (
        api as TypedApi<typeof dotPpl>
      ).query.Identity.SuperOf.getValue(address, { at: 'best' }).then((res) => {
        const [parentAddress, parentIdentity] = res || []

        if (!parentAddress || !parentIdentity) {
          return { parentAddress: '', display: '' }
        }

        const sub =
          parentIdentity.type !== 'None' && parentIdentity.value
            ? (parentIdentity.value as FixedSizeBinary<3>).asText()
            : ''

        return { sub, parentAddress }
      })

      const addressToUse = parentAddress || address

      const identity = await (api as TypedApi<typeof dotPpl>).query.Identity.IdentityOf.getValue(
        addressToUse,
        {
          at: 'best'
        }
      ).then((val) => {
        const id: IdentityInfo = { judgements: [], sub }

        if (val?.[0]) {
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
        }

        if (id.judgements.length === 0 && id.sub === undefined && Object.keys(id).length === 2) {
          // there's no identity
          return undefined
        }

        return id
      })

      return identity
    },
    [api]
  )

  return getIdentity
}
