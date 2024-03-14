import { RefObject, useEffect, useRef } from 'react'

export interface ObserverProps {
  threshold: number
  rootMargin?: string
  root?: HTMLElement | null
}

export const useInfiniteScroll = (
  ref: RefObject<HTMLDivElement>,
  observerProps: ObserverProps,
  callback?: () => void
) => {
  const observer = useRef(
    new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback?.()
      }
    }, observerProps)
  )

  useEffect(() => {
    const element = ref.current
    const ob = observer.current

    if (element) {
      ob.observe(element)
    }

    return () => {
      ob.disconnect()
    }
  }, [ref])
}
