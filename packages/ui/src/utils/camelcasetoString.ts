export const camelcasetoString = (proxy: string) =>
  proxy.replace(/[A-Z]/g, function (match, index) {
    return index === 0 ? match : ` ${match}`
  })
