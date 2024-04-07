import { usePureByIdsQueryQuery } from '../../types-and-hooks'
import { useMemo } from 'react'
import { useNetwork } from '../contexts/NetworkContext'

interface Args {
  pureIds: string[]
}

export const usePureByIdsSubscription = ({ pureIds }: Args) => {
  const { selectedNetwork } = useNetwork()
  const hasSomethingToQuery = useMemo(() => pureIds.length > 0, [pureIds])
  const { error, data, isLoading, refetch } = usePureByIdsQueryQuery(
    { pureIds },
    {
      enabled: hasSomethingToQuery,
      queryKey: [`KeyPureByIde-${pureIds}-${selectedNetwork}`]
      // refetchInterval: 5000
    }
  )
  // const client = useMemo(
  //   () =>
  //     selectedNetworkInfo &&
  //     hasSomethingToQuery &&
  //     createClient({ url: selectedNetworkInfo.httpGraphqlUrl.replace('http', 'ws') }),
  //   [hasSomethingToQuery, selectedNetworkInfo]
  // )

  /**
   * @see https://github.com/enisdenjo/graphql-ws#observable
   */
  // function fromWsClientSubscription<TData = Record<string, unknown>>(
  //   client: Client,
  //   payload: SubscribePayload
  // ) {
  //   return new Observable<TData | null>((observer) =>
  //     client.subscribe<TData>(payload, {
  //       next: (data) => {
  //         return observer.next(data.data)
  //       },
  //       error: (err) => {
  //         return observer.error(err)
  //       },
  //       complete: () => {
  //         return observer.complete()
  //       }
  //     })
  //   )
  // }

  // const { error, data, isLoading, refetch } = useSubscription(
  //   [`KeyWatchedPureById-${pureIds}-${selectedNetwork}`],
  //   () => {
  //     onUpdate(null)
  //     if (!client) return new Observable<null>()

  //     return fromWsClientSubscription<{
  //       accounts: PureByIdsSubscription['accounts']
  //     }>(client, {
  //       query: PureByIdsDocument,
  //       variables: {
  //         pureIds
  //       }
  //     })
  //   },
  //   {
  //     onData(data) {
  //       !!data && onUpdate(data)
  //     },
  //     onError(error) {
  //       console.error('WatchedPureById subscription error', error)
  //     }
  //     // retry: (failureCount: number, error: Error) => {
  //     //   console.error(
  //     //     'Subscription WatchedPureById failed',
  //     //     failureCount,
  //     //     'times with error',
  //     //     error
  //     //   )
  //     //   // will retry until it returns falls
  //     //   return true
  //     // }
  //   }
  // )

  // if (isError) {
  //   console.error('Subscription WatchedPureById error, refetching', error)
  //   refetch()
  // }

  // if (isSubsriptionLoading) {
  //     console.log('subscription loading', multisigs);
  // }

  // console.log('status', status)
  // if (isSuccess) {
  //     console.log('is success', data)
  // }
  // console.log('subscription data', data)
  //   return <div>Data: {JSON.stringify(data?.multisigCalls)}</div>;

  return { data, isLoading: hasSomethingToQuery && isLoading, error, refetch }
}
