import { ISubmittableResult } from '@polkadot/types/types'
import { useApi } from '../contexts/ApiContext'
import { useToasts } from '../contexts/ToastContext'

interface Args {
  onSubmitting?: () => void
  onSuccess?: () => void
  onFinalized?: () => void
}

export const useGetSigningCallback = ({ onSubmitting, onSuccess, onFinalized }: Args) => {
  const { addToast } = useToasts()
  const { api } = useApi()


  return ({ events = [], status }: ISubmittableResult) => {
    onSubmitting && onSubmitting()

    status.isBroadcast && addToast({ title: `Tx broadcasted`, type: "loading" })
    console.log('Transaction status:', status.type);
    let errorInfo = "";
    let toastErrorShown = false

    if (status.isInBlock) {
      console.log('Included at block hash', status.asInBlock.toHex());
      console.log('Events:');

      events.forEach(({ event, phase }) => {
        const { data, method, section } = event
        console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());

        // check if multisig or proxy has an error
        if (api.events.multisig.MultisigExecuted.is(event) || api.events.proxy.ProxyExecuted.is(event)) {
          // extract the data for this event
          const dataJSON = data.toJSON() as { [index: string]: any; }[];

          Array.isArray(dataJSON) && dataJSON.some((dispatchError) => {
            if (dispatchError?.err?.module) {
              const mod = dispatchError.err.module
              const error = api.registry.findMetaError(
                new Uint8Array([Number(mod.index), Number(mod.error.slice(0, 4))])
              )

              errorInfo = Array.isArray(error.docs) ? error.docs.join('') : error.docs || ''

              // stop looping we found an error
              return true
            }

            return false
          })
        }

        if (api.events.system.ExtrinsicSuccess.is(event)) {
          !errorInfo && !toastErrorShown && addToast({ title: "Tx in block", type: "loading" })
          onSuccess && onSuccess()
        }

        // if the extrinsic fails alltogether
        if (!errorInfo && api.events.system.ExtrinsicFailed.is(event)) {
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
        }

        if (!!errorInfo && !toastErrorShown) {
          addToast({ title: errorInfo, type: "error" })
          // prevent showing several errors
          toastErrorShown = true
        }
      });
    } else if (status.isFinalized) {
      onFinalized && onFinalized()
      !errorInfo && addToast({ title: "Tx finalized", type: "success" })
      console.log('Finalized block hash', status.asFinalized.toHex());
    }
  }
}