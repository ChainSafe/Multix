import { useEffect, useState } from 'react'
import { DeriveAccountInfo, DeriveAccountRegistration } from '@polkadot/api-derive/types'
import { useApi } from '../contexts/ApiContext'

const multisigWithProxy = [
  {
    sig: [
      'ESQzLXFRon3h5hUfNN9QTSQQTEzto5XNTGxF3g1myZELwX6',
      'DucTmnu1EQWnYtz9TjFfos5DtCHxWooTD3sbmQq6e61V7CW',
      'FvdwMNP57nRWEsNZZsrHWKqnbmduy4jBAC8MeLmgi9Yp8sA',
      'HWyLYmpW68JGJYoVJcot6JQ1CJbtUQeTdxfY1kUTsvGCB1r',
      'Hf8C626KBAjitMV7w8AhQWDCiPgUU47htEwbomq5mDMKeyL',
      'Hk7snkgFNhrDRfwveEdpwgwu6D9uUmXwcLy3dZgM2EhHVJq'
    ],
    pure: 'CnykUtVdvGUwap4fw1knUjGnG2cH1HMi4EbC7GDM3UtSGxY',
    multi: 'EzGuueBfwBVHS7RBxSyaBGeZMTkHqNKqVHnqJ3ZeWyCmvw6'
  },
  {
    sig: [
      'Cc5Ds2kGtnUdESuV2f5Nr3rMixJ3h5egu9pfP4nq5nn5pvm',
      'CrqmUkTMrXoAkyyG456XmWuxEfu8MZtFAmRfpRBbVHvNX6g',
      'DNeppzzw83jmP7LbmYo5hb6GLTT1XcgkMu8pjo5fnBSeFpY',
      'D75VMFMquyLgVck47uYZsRRmXyBEGfo8bLuS7ye4pjvCGAB',
      'EHX2D8EbKTVRHdYjwNguNm65DYYRYsstyj2s3LFmy8gZgFn'
    ],
    pure: 'EVBfLtWN2LQthFycbsqpaX2wR5eWJtvnZrhpxKVDdityRR3',
    multi: 'G6u38FLdiJQuUvHeD3nvSLX94z8kFbeXA8FsDb5imReSdJ6'
  },
  {
    sig: [
      'HqfNL8eE5Efvw5Wcj8d3tjeoCS3BPfshMHWG6rmtYUrgyrU',
      'CrbJuFZWjY3yft424EMTY9hdbWoU878DFs74v3a8nNDeKJD',
      'CbLdKvBgWnXS4rJrsRGtUUH2bcBVURxECWMDW6VLuvS1E2y',
      'DGaHm71gRHJGQVF2ubunkx37qgLpno2gYibq2WHoDJpFMt6',
      'FyqfGLsFfnyCHL1D54GcbTtpnarWNBB98HHxoNsCJR1FS89',
      'GoKXX37KGupXDn4i5iKs1qR9a3zQA9B8PiPPHcrbGpETFFV',
      'F7j5tJaSUPUK3oB9nvAsZ5sigRCXQePnUfw9i1RzcknMdo7',
      'ETKAhuBZTDuTNjjjfC4GVUMQG9nBYvgYpvMjFCJa3yYFQvy',
      'EzVt5Z3pddR55HnS637AEqTutcxPDMKux2JzjK7pDG85Nmz',
      'GXR6g86nbAG6cyNjAANhe9yjV92Dztt9F7Eea3sLDYYxbRq',
      'Cg2Bqvfu4X6z4wvRHx3Z7SjJumZcTALwgcXzR67f1vKDeZi',
      'CmkHUWRBZWp8vh3t9ZMyddx3DHjqfv2jErXrECtcizxoGc2',
      'FvXyeGRadBuKMzN9DX77QNmaTC4XM293EVx9mAf5txvwzPK'
    ],
    pure: 'DCZyhphXsRLcW84G9WmWEXtAA8DKGtVGSFZLJYty8Ajjyfa',
    multi: 'CbsxftwHVqZHEdcv1377x5SGoDF9oC5Knvq3BbDsnTPk99L'
  },
  {
    sig: [
      'GXR6g86nbAG6cyNjAANhe9yjV92Dztt9F7Eea3sLDYYxbRq',
      'HqfNL8eE5Efvw5Wcj8d3tjeoCS3BPfshMHWG6rmtYUrgyrU',
      'CrbJuFZWjY3yft424EMTY9hdbWoU878DFs74v3a8nNDeKJD',
      'CbLdKvBgWnXS4rJrsRGtUUH2bcBVURxECWMDW6VLuvS1E2y',
      'Cg2Bqvfu4X6z4wvRHx3Z7SjJumZcTALwgcXzR67f1vKDeZi',
      'CmkHUWRBZWp8vh3t9ZMyddx3DHjqfv2jErXrECtcizxoGc2',
      'EzVt5Z3pddR55HnS637AEqTutcxPDMKux2JzjK7pDG85Nmz',
      'FvXyeGRadBuKMzN9DX77QNmaTC4XM293EVx9mAf5txvwzPK'
    ],
    pure: 'DCZyhphXsRLcW84G9WmWEXtAA8DKGtVGSFZLJYty8Ajjyfa',
    multi: 'GuAJyobtcGsgeRNn9ds2R2tjkFz52d5Szvhez1nLjh3J83Z'
  },
  {
    sig: [
      'FtftGFWcRPQCaLRfPuVwBCVgVZGnUYxPRPtK72jdhZanynX',
      'GcXMwCNrK3YoaZKRyZk4CiHvAxMBtJm2vb1LzGNohUm2vgL',
      'JCmeshGL5mdw6gzCViGvVWxP9tUQXYGEpr7iuRQNksUbSUU',
      'GCFEM2oEpqD8EXnZNiva9cmfK6UWgWqFycxwn88s1gkuqvF',
      'Ckz9Mgx5ZfpbN52aHFQ68nUCPVhEjUx8X8wLySZwoiCSpEe',
      'D5eJR9q92FPG2gTKc46URfFhWFdfueNEPjgKRSH1sVjEnk1',
      'EQ8sEUZt35DwZMCWBfy8RkixktAfxBPXfAjbTT9w4Nh6RGF'
    ],
    pure: 'DggTJdwWEbPS4gERc3SRQL4heQufMeayrZGDpjHNC1iEiui',
    multi: 'GuPYMEHVhjTrBz42p8G4NuCMRP9wg77hbZn1owVDnzigPGx'
  },
  {
    sig: [
      'Cde36KPHYw4Za7qMBWXs8nxdkgLp6rgkiGXoYr3FSXAQ1oX',
      'DJebHAPRB9KaPp1wvYhNX1KHThujMzotDQy42ardk6ELGaw',
      'Dytg9P2RwkDKkyA6fRpxwAJc8SbD1zRkTca9a1uxEu6RngF',
      'Fr6T7reptUewP3qRKFv34A68devdqo7thbLZHwSXb86knet'
    ],
    pure: 'GhNvKDa3PRY5ZyFP8Vj97TwCe5oUhTk7NEvmNMqjxHPGiPD',
    multi: 'Dmpmx8pDrxw1Jj28nRF43ncEP5eCcUZzsUSaFjtwEYK99yQ'
  },
  {
    sig: [
      'HxyKNyZsr7gMAo2C4W4XKVt94MGLq71vJBm4Cs5YtbKgzxL',
      'DPcLx1cnnJKvLfad4JTNzHA3T2vMmvwLHZSAj9gGim4qLjg',
      'HLD3kgUaiwfi97wfLQSXAjhWf1NsbahcMYLijzNu3HNbG4B'
    ],
    pure: 'GsGcRLXWFcVnxUaWVE9ojJpnDNM9R7QNxYBrshWtnTcohyc',
    multi: 'EB45wna65EBS9L9y9UYAT7EVqH2gY9HR6nyFtiU7fVmAoGq'
  },
  {
    sig: [
      'CrtbPFfoEpb4EFS98qeKZkDBfzxguKk6MHx8ggxY8deTnXV',
      'F5UN9sS74ubmmQfHxZeQjdScxUNZiZaH93x9aKeJ2yvS3dn',
      'DTDEhtx8b28StSpdWaqEpJ7HUW1VPpq7W7nauP8Bit6PciE'
    ],
    pure: 'DaPysNksHX28AQtvP91FFqsdG1d1RSLr5nHc9SW16bm96KY',
    multi: 'Fun9aR2Nak2PCKE1QYj5PGk9bbxv3ATz2XFpY5CF2ATqfVV'
  },
  {
    sig: [
      'D8DtYYJUUBoACJwJrLNyn8aYArumdViVWAcZRUKcxnSoV9D',
      'EUbLd8Vc2PepZKz9onPDfRzzE2GqsUtLjUy8yDunZu7xndz',
      'GCMGu8sjEuEZuMZavo5PLvAhr8fJXAty76jDV1YPquG9erp',
      'Cbbsb4t8Uq5KDaWeg12f2LMwTg6RGjei29bVo2ei4ZkFN1g',
      'G78epYd9YJUGnLDNzKPx9mrMTCUtRHgrDVzB7Ucu5UAJVbK'
    ],
    pure: 'DDzazS9qxXPmm4t8vX8zpCBzFcDuhKD3BNKqmXxtbJYoHte',
    multi: 'DmHG4r2oKs6CkWYjS8WrSPgUAV84VnzgbrshqLakHk1xsCg'
  },
  {
    sig: [
      'CzpA6L6iG21oSRCKppR9pzLc2BjXVDzb3KyVbKa1P91GEFJ',
      'GUYV7XpsU4ivFDmaciknYtoxUgrTWeL9byEJxfD8vgEjn3n'
    ],
    pure: 'D1DAzmq1LJvTGnMvmxPEgxDzzVRTaZuP6S8YV2HsSxVcD8p',
    multi: 'HkuYSC3mH3oLWtbURNfrCwvKeuZTFaVnQMoXna3NSAzbggu'
  },
  {
    sig: [
      'G2LtE3ScoRNG74WeLAK9DWKdybtEpnsru6hFZ1bua1zqJjs',
      'Gr3gfzuRG1NirbENaYeQq2Y7ffbo7rn6xszxReGP8eWGMub',
      'E8CfnFVoEDPfiuetggLjRy4z2bjrHdKiyF6Lvo2yTZ9MNr7'
    ],
    pure: 'DaPysNksHX28AQtvP91FFqsdG1d1RSLr5nHc9SW16bm96KY',
    multi: 'HDA91KcvmoWdLZf4EdvCbGNT7raAhSJzgkJPLfCHjA3Y3eq'
  },
  {
    sig: [
      'F5UN9sS74ubmmQfHxZeQjdScxUNZiZaH93x9aKeJ2yvS3dn',
      'DTDEhtx8b28StSpdWaqEpJ7HUW1VPpq7W7nauP8Bit6PciE',
      'J4RpiVyTNog4fwnG1PLbmbBBXHJHUPe4fyrATxH5MxDaQuB'
    ],
    pure: 'ESVfLhWFe7pAePrxctqDPEx8jEZFPCWxfmyuGAzn8gAJdPU',
    multi: 'EgmxKjvqBDGZju9gtTrV4GFpujhF7dbeAzC3CqTPVmdVhyS'
  },
  {
    sig: [
      'FRg4Ws2n6eC6FtaAoZkiJRNjsgY1sqQMakELUVAguefJiR9',
      'H9qhfv5KLNcSnSwFJ5rVmJtpnksg9t5TPcNgNhQn6a72LEw',
      'HeHhXhQMggRyVfxiPyuirnd9Lit6GSrYDUxNdBrhsJ3J6Cc'
    ],
    pure: 'HggqHhqLXkYLBMAfrFmtt9zzny5SL9o37A73hTJXYFCaHoJ',
    multi: 'GfDee2C1ogoeWjQJsUz2bRFaT342DZpBcW7FW5AAEJe7gmz'
  },
  {
    sig: [
      'FASj8TKiydc5PjvWYX6riWoDckKw1EJYcuj67DWByAPoiy1',
      'JF4Y4D92HfAeZE1GVcuvqgDq9wto35JG74Ucp4ws1ZHciDA'
    ],
    pure: 'EpiYZuEe9qBQJSE7izvASrcteXPb87LmnUoV6FV2eDiGwHg',
    multi: 'Htkj4EFZjENEB9J5JnVNKCZDAb2fiuXALpvq9zy8iGkw6Qd'
  }
]

export const useScript = () => {
  const [identity, setIdentity] = useState<DeriveAccountRegistration | null>(null)
  const { api, isApiReady } = useApi()

  useEffect(() => {
    if (!api) {
      return
    }

    if (!isApiReady) {
      return
    }

    const asyncF = async () => {
      for await (const { multi, sig, pure } of multisigWithProxy) {
        const info = await api.derive.accounts.info(multi)
        //   .then(async (info) => {
        console.log('/n')
        console.log(
          'Multi',
          multi,
          // info.nickname,
          info.identity.display,
          // info.
          // info.identity.displayParent,
          info.identity.email
          //   JSON.stringify(info)
        )
        const info3 = await api.derive.accounts.info(pure)
        //   .then(async (info) => {
        console.log(
          'Pure',
          pure,
          // info.nickname,
          info3.identity.display,
          info3.identity.email
          // info.
          // info.identity.displayParent,
          //   JSON.stringify(info3)
        )

        for await (const address of sig) {
          const info2 = await api.derive.accounts.info(address)
          console.log(
            '---',
            address,
            //   JSON.stringify(info2)2
            info2.identity.display,
            info2.identity.email
          )

          //       .info(multi)
          //       .then((info2) => {

          //       })
          //       .catch(console.error)
          //   })
        }
        //   })
        //   .catch((e) => console.error(e))
      }
    }

    asyncF()
  }, [api, isApiReady])
}
