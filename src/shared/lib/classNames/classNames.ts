type ObjectClass = Record<string, boolean | undefined>

export const classNames = (
  cls: string | undefined,
  object: ObjectClass = {},
  additional: Array<string | undefined> = []
): string => {
  const entries = Object.entries(object)
  let result: string = ''
  if (cls) result = cls
  entries.forEach((selector, idx) => {
    const isFirst = idx === 0
    const isResultEmpty = result === ''
    const space = isFirst && isResultEmpty ? '' : ' '
    if (selector[1]) {
      result += space + selector[0]
    }
  })
  additional.forEach((selector) => {
    if (selector) result += ' ' + selector
  })
  return result
}

// console.log(classNames('hover', { 'foo': true, 'bar': false, 'haha': true }, [ 'dark' ]))
