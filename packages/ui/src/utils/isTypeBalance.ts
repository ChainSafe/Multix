import { balanceCalls } from '../constants'

export const isTypeBalanceWithBalanceCall = (typeName?: string, call?: string) =>
  !!typeName &&
  !!call &&
  ['Balance', 'BalanceOf', 'Amount'].includes(typeName) &&
  balanceCalls.includes(call)
