export const isTypeAccount = (typeName?: string) =>
  !!typeName && ['AccountIdLookupOf', 'LookupSource'].includes(typeName)
