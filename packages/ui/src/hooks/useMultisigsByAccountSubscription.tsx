import { useSubscription } from 'react-query-subscription'
import { Client, createClient, SubscribePayload } from 'graphql-ws'
import { Observable } from 'rxjs'
import { MultisigsByAccountsDocument, MultisigsByAccountsSubscription } from '../../types-and-hooks'
import { useMemo } from 'react'
import { useNetwork } from '../contexts/NetworkContext'

interface Args {
  onUpdate: (data: MultisigsByAccountsSubscription | null) => void
  accountIds: string[]
  watchedAccountIds: string[]
}

export const useMultisigsByAccountSubscription = ({
  onUpdate,
  accountIds,
  watchedAccountIds
}: Args) => {
  const { selectedNetworkInfo, selectedNetwork } = useNetwork()
  const client = useMemo(
    () => selectedNetworkInfo && createClient({ url: selectedNetworkInfo.wsGraphqlUrl }),
    [selectedNetworkInfo]
  )

  /**
   * @see https://github.com/enisdenjo/graphql-ws#observable
   */
  function fromWsClientSubscription<TData = Record<string, unknown>>(
    client: Client,
    payload: SubscribePayload
  ) {
    return new Observable<TData | null>((observer) =>
      client.subscribe<TData>(payload, {
        next: (data) => {
          return observer.next(data.data)
        },
        error: (err) => {
          return observer.error(err)
        },
        complete: () => {
          return observer.complete()
        }
      })
    )
  }

  const { isError, error, data, isLoading } = useSubscription(
    [`KeyMultisigsByAccount-${accountIds}-${watchedAccountIds}-${selectedNetwork}`],
    () => {
      if (!client) return new Observable<null>()

      return fromWsClientSubscription<{
        accounts: MultisigsByAccountsSubscription['accounts']
      }>(client, {
        query: MultisigsByAccountsDocument,
        variables: {
          accountIds: [...watchedAccountIds, ...accountIds],
          watchedAccountIds
        }
      })
    },
    {
      onData(data) {
        !!data && onUpdate(data)
      },
      onError(error) {
        console.error('KeyMultisigsByAccount subscription error', error)
      }
    }
  )

  if (isError) {
    console.error('KeyMultisigsByAccount subscription error', error)
  }

  // if (isSubsriptionLoading) {
  //     console.log('subscription loading', multisigs);
  // }

  // console.log('status', status)
  // if (isSuccess) {
  //     console.log('is success', data)
  // }
  // console.log('subscription data', data)
  //   return <div>Data: {JSON.stringify(data?.multisigCalls)}</div>;

  return { data, isLoading, error }
}
