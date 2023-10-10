export const isTypeAccount = (typeName?: string) =>
  !!typeName && ['AccountIdLookupOf'].includes(typeName)
