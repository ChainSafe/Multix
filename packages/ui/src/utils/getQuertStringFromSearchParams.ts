export const getQuertStringFromSearchParams = (param: URLSearchParams) => {
  return Array.from(param.entries()).reduce((prev, [key, value]) => {
    return `${prev}${prev ? '&' : ''}${key}=${value}`
  }, '')
}
