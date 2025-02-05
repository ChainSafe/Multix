export const MULTI_PREFIX = 'MULTI'

export const polkadotChainIds = ['polkadot', 'asset-hub-polkadot', 'coretime-polkadot']
export const kusamaChainIds = ['kusama', 'asset-hub-kusama', 'coretime-kusama']
export const paseoChainIds = ['paseo', 'asset-hub-paseo', 'coretime-paseo']
export const westendChainIds = ['westend', 'asset-hub-westend', 'coretime-westend']

export const replicationGroups = {
  polkadot: polkadotChainIds,
  kusama: kusamaChainIds,
  paseo: paseoChainIds,
  westend: westendChainIds
}
// Manually add asset hub pure proxies
// https://polkadot.subsquare.io/referenda/1308
export const PURE_PROXIEs_MIGRATION_BLOCK = 7903349 // <-- this needs to be a block where something happens
export const PURE_PROXIEs_MIGRATION_CHAIN = 'asset-hub-polkadot'
export const PURE_PROXIES_MIGRATION_ARRAY = [
  {
    entity: 'Heroic',
    who: '16Cf2SMFkWMApL7fiaiu3nSFiVk3wZoNHn7QTzTL1KvLDMcT',
    pure: '12RP5AAF8TEb4qVBgiAgJXMVF8NzYZZPD8XftcKD7sM153E7',
    signatories: [
      '17L1abEGisdmSQamtrYvsdsEWhBQiAqSQfjuNYAADYNeivp',
      '12EeAYWN52HcmCwjPmxyGBZ5H4tXnTL4CZ7z63FBZYWM64mQ',
      '14H4NwJn122wNmMJaQErbNWZuyNdMAuUrh5W7BpNSDpgiWAj'
    ],
    threshold: 2
  },
  {
    entity: 'PBA',
    who: '1kJLyFPntELGnaawpDLzidR7rXaX4wQMPbd9ShQQZ3LK1Nh',
    pure: '15UQ1nhCRRJoWf1C4LBraqCVXS91qPiWLiWQfnS3k8Dk4R79'
  },

  {
    entity: 'Polytope Labs',
    who: '12w4jGrxQuWRqHr1dCoJZS8Ez8eoUdqVbCA7n1ze584umJoy',
    pure: '1tCybVtS7otBAK5CnbDwJQumWmfEWTCXRaYZM9UtihTQ1Dt'
  },

  {
    entity: 'Social Media Editorial Board',
    who: '12k979BFp7JczuaHEvg7KpPwNkpHSNu5NYQRSL9cFjr7rdhh',
    pure: '1VNSqFCX4Gk7R8kKBbEaYhXSioBGLrrL4kHgLwDkoTLkgqB'
  }
]
