import { RefObject, useEffect, useRef, useState } from 'react'

export interface ObserverProps {
  threshold: number
  rootMargin?: string
  root?: HTMLElement | null
}

export const useFirstViewportEntry = (
  ref: RefObject<HTMLDivElement>,
  observerProps: ObserverProps
) => {
  const [entered, setEntered] = useState(false)

  const observer = useRef(
    new IntersectionObserver(([entry]) => {
      setEntered(entry.isIntersecting)
    }, observerProps)
  )

  useEffect(() => {
    const element = ref.current
    const ob = observer.current

    if (entered) {
      ob.disconnect()
    }

    if (element && !entered) {
      ob.observe(element)
    }

    return () => {
      ob.disconnect()
    }
  }, [ref, entered])

  return entered
}
