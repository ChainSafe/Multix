import { useSubscription } from "react-query-subscription";
import { Client, createClient, SubscribePayload } from "graphql-ws";
import { Observable } from "rxjs";
import { MultisigCallsByMultisigIdDocument, MultisigCallsByMultisigIdSubscription } from "../../types-and-hooks";
import { useMemo } from "react";

interface Args {
    onUpdate: Function
    multisigs: string[]
}

export const useMultisigCallSubscription = ({ onUpdate, multisigs }: Args) => {
    const client = useMemo(() => createClient({ url: import.meta.env.VITE_GRAPHQL_WS_PROVIDER }), []);

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
                    onUpdate(data.data);
                    observer.next(data.data)
                },
                error: (err) => observer.error(err),
                complete: () => {
                    observer.complete()
                },
            })
        );
    }


    const { isError, error } = useSubscription(
        [`KeyMultisigCallsByMultisigId-${multisigs}`],
        () => fromWsClientSubscription<{ multisigCalls: MultisigCallsByMultisigIdSubscription }>(client, {
            query: MultisigCallsByMultisigIdDocument,
            variables: {
                multisigs,
            },
        }),
        {
            // options
        }
    );

    if (isError) {
        console.error('subscription error', error)
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
}