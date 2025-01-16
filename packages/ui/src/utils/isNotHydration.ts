import { Transaction } from 'polkadot-api'
import { IApiContext } from '../contexts/ApiContext'

interface Params {
  apiDescriptor: IApiContext['apiDescriptor']
  tx1: Transaction<any, any, any, any>
  tx2: Transaction<any, any, any, any>
}

export const isNotHydration = ({ apiDescriptor, tx1, tx2 }: Params) => {
  return apiDescriptor === 'hydration' ? tx1 : tx2
}
