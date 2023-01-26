import { useSubscription } from "react-query-subscription";
import { Client, createClient, SubscribePayload } from "graphql-ws";
import { Observable } from "rxjs";
import { AllMultisigCallsDocument, AllMultisigCallsSubscription } from "../../types-and-hooks";

interface Args {
    onUpdate: Function
}

export const useMultisigCallSubscription = ({ onUpdate }: Args) => {

    const client = createClient({ url: import.meta.env.VITE_GRAPHQL_WS_PROVIDER });

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
                complete: () => observer.complete(),
            })
        );
    }



    //   const { data, isLoading: isSubsriptionLoading, isError, error } = 
    useSubscription(
        ["KeyAllMultisigCalls"],
        () => fromWsClientSubscription<{ multisigCalls: AllMultisigCallsSubscription }>(client, {
            query: AllMultisigCallsDocument,
        }),
        {
            // options
        }
    );

    //   if (isSubsriptionLoading) {
    //     return <div>Loading...</div>;
    //   }
    //   if (isError) {
    //     console.error(error)
    //     return (
    //       <div role="alert">
    //         {error?.message || 'Unknown error'}
    //       </div>
    //     );
    //   }
    //   return <div>Data: {JSON.stringify(data?.multisigCalls)}</div>;
}