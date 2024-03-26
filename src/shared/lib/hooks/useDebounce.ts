import { useMemo, useRef } from 'react'

export const useDebounce = (cb: any, ms: number) => {
  const timer = useRef<null | ReturnType<typeof setTimeout>>()

  // i decided to use here useMemo because as far as I know if I use useContext,
  // it'll create inner callback everytime. useMemo keeps the same function
  return useMemo(
    () =>
      (...args: any[]) => {
        if (timer.current) {
          clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
          cb(...args)
        }, ms)
      },
    [cb, ms]
  )
}
