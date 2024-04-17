import { EventListenerType } from 'shared/types/types'
import { useEffect, useRef } from 'react'

export const useEventListener = (
  type: EventListenerType,
  cb: (e: Event) => void
) => {
  const callbackRef = useRef(cb)

  useEffect(() => {
    callbackRef.current = cb
  }, [cb])

  useEffect(() => {
    const handler = (e: Event) => {
      callbackRef.current(e)
    }

    window.addEventListener(type, handler)

    return () => {
      window.removeEventListener(type, handler)
    }
  }, [type])
}
