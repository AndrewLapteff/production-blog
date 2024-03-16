import { useEffect } from 'react'

export const useInitialEffect = (
  callback: () => any,
  avoid?: typeof PROJECT_ENV
) => {
  useEffect(() => {
    if (PROJECT_ENV !== avoid) {
      callback()
    }
  }, [])
}
