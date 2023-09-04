import { encodeId } from './accountEncoding'

export function getOriginAccount(origin: any): string {
  if (origin && origin.__kind === 'system' && origin.value.__kind === 'Signed') {
    const id = origin.value.value
    if (id.__kind === 'Id') {
      return encodeId(id.value)
    } else {
      return encodeId(id)
    }
  } else {
    throw new Error('Unexpected origin')
  }
}
