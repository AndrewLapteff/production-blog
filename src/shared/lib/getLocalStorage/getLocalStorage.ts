export const getLocalStorage = (key: string, nestedKey?: string): string => {
  let data = localStorage.getItem(key) || ''
  if (data && nestedKey) {
    const { accessToken } = JSON.parse(data)
    data = accessToken
  }
  return data
}
