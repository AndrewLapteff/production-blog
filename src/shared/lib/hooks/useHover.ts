import { useCallback, useMemo, useState } from 'react'

interface handlers {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

type UseHoverReturnType = [boolean, handlers]

export const useHover = (): UseHoverReturnType => {
  const [isHover, setIsHover] = useState(false)

  const onMouseEnter = useCallback(() => {
    setIsHover(true)
  }, [])

  const onMouseLeave = useCallback(() => {
    setIsHover(false)
  }, [])

  return useMemo(
    () => [isHover, { onMouseEnter, onMouseLeave }],
    [isHover, onMouseEnter, onMouseLeave]
  )
}
