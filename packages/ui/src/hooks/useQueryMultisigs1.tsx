import { useMultisigsBySignatoriesOrWatchedQuery } from '../../types-and-hooks'
import { useMemo } from 'react'
import { useNetwork } from '../contexts/NetworkContext'

interface Args {
  accountIds: string[]
  watchedAccountIds: string[]
}

export const useQueryMultisigs1 = ({ accountIds, watchedAccountIds }: Args) => {
  const { selectedNetwork } = useNetwork()
  const hasSomethingToQuery = useMemo(
    () => accountIds.length > 0 || watchedAccountIds.length > 0,
    [accountIds, watchedAccountIds]
  )

  const { error, data, isLoading, refetch } = useMultisigsBySignatoriesOrWatchedQuery(
    { accountIds, watchedAccountIds },
    {
      enabled: hasSomethingToQuery,
      queryKey: [
        `KeyMultisigsBySignatoriesOrWatched-${accountIds}-${watchedAccountIds}-${selectedNetwork}`
      ]
      // refetchInterval: 5000
    }
  )
  // const client = useMemo(
  //   () =>
  //     selectedNetworkInfo &&
  //     hasSomethingToQuery &&
  //     createClient({ url: selectedNetworkInfo.httpGraphqlUrl.replace('http', 'ws') }),
  //   [selectedNetworkInfo, hasSomethingToQuery]
  // )

  // /**
  //  * @see https://github.com/enisdenjo/graphql-ws#observable
  //  */
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
  //   [`KeyMultisigsBySignatoriesOrWatched-${accountIds}-${watchedAccountIds}-${selectedNetwork}`],
  //   () => {
  //     onUpdate(null)
  //     if (!client) return new Observable<null>()

  //     return fromWsClientSubscription<{
  //       accountMultisigs: MultisigsBySignatoriesOrWatchedSubscription['accountMultisigs']
  //     }>(client, {
  //       query: MultisigsBySignatoriesOrWatchedDocument,
  //       variables: {
  //         accountIds,
  //         watchedAccountIds
  //       }
  //     })
  //   },
  //   {
  //     onData(data) {
  //       !!data && onUpdate(data)
  //     },
  //     onError(error) {
  //       console.error('MultisigsBySignatoriesOrWatched subscription error', error)
  //     }
  //     // retry: (failureCount: number, error: Error) => {
  //     //   console.error(
  //     //     'Subscription MultisigsBySignatoriesOrWatched failed',
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
  //   console.error('Subscription MultisigsBySignatoriesOrWatched error, refetching', error)
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

  return {
    data,
    isLoading: hasSomethingToQuery && isLoading,
    error,
    refetch
  }
}
