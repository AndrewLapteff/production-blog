import { getQueryParams } from './setQueryParams'

describe('setQueryParams.test.tsx', () => {
  it('should set proper query param', () => {
    const params = {
      order: 'views'
    }
    expect(getQueryParams(params)).toBe('?order=views')
  })

  it('should set proper query params', () => {
    const params = {
      sortOrder: 'asc',
      order: 'views'
    }
    expect(getQueryParams(params)).toBe('?sortOrder=asc&order=views')
  })

  it('should set proper query params with undefined', () => {
    const params = {
      sortOrder: 'asc',
      order: undefined
    }
    expect(getQueryParams(params)).toBe('?sortOrder=asc')
  })
})
