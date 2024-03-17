import { useCallback, useEffect } from 'react'

interface OnKeyPressProps {
  callback: (...args: any[]) => void
  key: string
  once?: boolean
}

interface UseKeyPressProps {
  onKeyDown?: OnKeyPressProps
  onKeyUp?: OnKeyPressProps
}

export const useKeyPress = ({ onKeyDown, onKeyUp }: UseKeyPressProps) => {
  const onKeyDownHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === onKeyDown?.key) {
        onKeyDown?.callback()
      }
    },
    [onKeyDown]
  )

  const onKeyUpHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === onKeyUp?.key) {
        onKeyUp?.callback()
      }
    },
    [onKeyUp]
  )

  useEffect(() => {
    if (onKeyDown) {
      window.addEventListener('keydown', onKeyDownHandler, {
        once: onKeyDown?.once
      })
    }
    if (onKeyUp) {
      window.addEventListener('keyup', onKeyUpHandler, {
        once: onKeyUp?.once
      })
    }

    return () => {
      if (onKeyDown) {
        window.removeEventListener('keydown', onKeyDownHandler)
      }
      if (onKeyUp) {
        window.removeEventListener('keyup', onKeyDownHandler)
      }
    }
  }, [onKeyDownHandler, onKeyDown, onKeyUpHandler, onKeyUp])
}
