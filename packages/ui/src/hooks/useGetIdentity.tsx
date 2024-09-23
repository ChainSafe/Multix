import { useCallback } from 'react'
import { useIdenityApi } from './useIdentityApi'
import { FixedSizeBinary, TypedApi } from 'polkadot-api'
import { dotPpl, IdentityData, IdentityJudgement } from '@polkadot-api/descriptors'

export interface IdentityInfo extends Record<string, any> {
  judgements: IdentityJudgement['type'][]
  sub?: string
}

export const useGetIdentity = () => {
  const { api } = useIdenityApi()

  const getIdentity = useCallback(
    async (address: string) => {
      if (!api || !address) {
        return
      }

      const { display, parentAddress } = await (
        api as TypedApi<typeof dotPpl>
      ).query.Identity.SuperOf.getValue(address, { at: 'best' }).then((res) => {
        const [parentAddress, parentIdentity] = res || []

        if (!parentAddress || !parentIdentity) {
          return { parentAddress: '', display: '' }
        }

        const display =
          (parentIdentity.type !== 'None' &&
            parentIdentity.value &&
            (parentIdentity.value as FixedSizeBinary<3>).asText()) ||
          ''

        return { display, parentAddress }
      })

      const addressToUse = parentAddress || address

      const identity = await (api as TypedApi<typeof dotPpl>).query.Identity.IdentityOf.getValue(
        addressToUse,
        {
          at: 'best'
        }
      ).then((val) => {
        const id: IdentityInfo = { judgements: [], display }
        val?.[0].judgements.forEach(([, judgement]) => {
          id.judgements.push(judgement.type)
        })
        Object.entries(val?.[0]?.info || {}).forEach(([key, value]) => {
          if ((value as IdentityData)?.type !== 'None') {
            // console.log('key', JSONprint(key));
            // console.log('value', JSONprint(value));
            const text = (value as IdentityData)?.value as FixedSizeBinary<2> | undefined
            if (text) {
              // if it has a parent this is the sub name
              // as the display name is already set
              if (key === 'display' && !!parentAddress) {
                id['sub'] = text.asText()
              } else {
                id[key] = text.asText()
              }
            }
          }
        })

        return id
      })

      return identity
    },
    [api]
  )

  return getIdentity
}
