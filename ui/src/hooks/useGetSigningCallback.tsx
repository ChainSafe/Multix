import { ISubmittableResult } from '@polkadot/types/types'
import { useApi } from '../contexts/ApiContext'
import { useToasts } from '../contexts/ToastContext'

interface Args {
  onIsSubmitting?: () => void
  onSuccess?: () => void
}

export const useGetSigningCallback = ({ onIsSubmitting, onSuccess }: Args) => {
  const { addToast } = useToasts()
  const { api } = useApi()


  return ({ events = [], status }: ISubmittableResult) => {
    onIsSubmitting && onIsSubmitting()
    status.type === "Broadcast" && addToast({ title: `Tx broadcasted`, type: "loading" })
    console.log('Transaction status:', status.type);
    let errorInfo;

    if (status.isInBlock) {
      console.log('Included at block hash', status.asInBlock.toHex());
      console.log('Events:');

      events.forEach(({ event, phase }) => {
        const { data, method, section } = event
        console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());

        if (api.events.system.ExtrinsicSuccess.is(event)) {
          addToast({ title: "Tx succeeded", type: "success" })
          onSuccess && onSuccess()
        }

        if (api.events.system.ExtrinsicFailed.is(event)) {
          // extract the data for this event
          const [dispatchError] = data;

          // decode the error
          if ((dispatchError as any).isModule) {
            // for module errors, we have the section indexed, lookup
            // (For specific known errors, we can also do a check against the
            // api.errors.<module>.<ErrorName>.is(dispatchError.asModule) guard)
            const decoded = api.registry.findMetaError((dispatchError as any).asModule);

            errorInfo = `${decoded.docs} - ${decoded.section}.${decoded.name}`;
          } else {
            // Other, CannotLookup, BadOrigin, no extra info
            errorInfo = dispatchError.toString();
          }
          errorInfo && addToast({ title: errorInfo, type: "error" })
        }
      });
    } else if (status.isFinalized) {
      console.log('Finalized block hash', status.asFinalized.toHex());
    }
  }
}