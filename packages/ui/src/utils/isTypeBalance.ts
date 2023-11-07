export const isTypeBalance = (typeName?: string) =>
  !!typeName && ['Balance', 'BalanceOf', 'Amount'].includes(typeName)
