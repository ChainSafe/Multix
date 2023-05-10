export const fetchData = <TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers'],
  url?: string
): (() => Promise<TData>) => {
  return async () => {
    const res = await fetch(url || import.meta.env.VITE_GRAPHQL_HTTP_PROVIDER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(options ?? {}),
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    const json = await res.json()

    if (json.errors) {
      const { message } = json.errors[0] || 'Error..'
      throw new Error(message)
    }

    return json.data
  }
}
