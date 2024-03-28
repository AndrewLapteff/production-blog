export const URLToObject = (url: URLSearchParams) => {
  const params: Dictionary = {}
  url.forEach((key, value) => {
    params[key] = value
  })

  return params
}
