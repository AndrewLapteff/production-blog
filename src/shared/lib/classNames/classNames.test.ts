import { classNames } from './classNames'

describe('classNames.ts test', () => {
  test('first argument test', () => {
    expect(classNames('dark')).toBe('dark')
  })

  test('first and third argument test', () => {
    const expected = 'dark open top'
    expect(classNames('dark', {}, ['open', 'top'])).toBe(expected)
  })

  test('all arguments at the same time', () => {
    const expected = 'dark flex class open top'
    expect(
      classNames('dark', { flex: true, class: true, disable: false }, [
        'open',
        'top'
      ])
    ).toBe(expected)
  })

  test('all arguments at the same time with undefined', () => {
    const expected = 'flex open'
    expect(
      classNames(undefined, { flex: true, class: undefined, disable: false }, [
        'open',
        undefined
      ])
    ).toBe(expected)
  })
})
