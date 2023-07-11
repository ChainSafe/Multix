export const JsonLog = (val: any): string => {
  return JSON.stringify(
    val,
    (_, value) => (typeof value === 'bigint' ? value.toString() : value),
    4
  )
}
