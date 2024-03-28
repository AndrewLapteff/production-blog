export const getQueryParams = (params: PartialRecord<string, string>) => {
  const serachParams = new URLSearchParams(window.location.search) // put previous URL params

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      serachParams.set(key, value)
    }
  })

  if (serachParams.size !== 0) {
    return '?' + serachParams.toString()
  } else {
    return ''
  }
}
/**
 * Sets query parameters in URL
 * @param {Object}
 */
export const setQueryParams = (params: PartialRecord<string, string>) => {
  window.history.pushState({}, '', getQueryParams(params))
}
