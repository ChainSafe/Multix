import { replicationGroups } from '../constants'

export const shouldReplicateOn = (chainId: string) => {
  const result = Object.entries(replicationGroups).find(([, group]) => {
    return group.find((id) => id === chainId)
  })

  // if we found 1 network containing the chainId
  // then the multisig should be replicated among all
  // the chains in the group
  if (result) {
    return result[1]
  }

  return
}
