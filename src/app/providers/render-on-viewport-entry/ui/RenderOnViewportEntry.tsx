import { ObserverProps, classNames, useFirstViewportEntry } from 'shared/lib'
import {
  memo,
  PropsWithChildren,
  Suspense,
  useEffect,
  useRef,
  useState
} from 'react'
import { Loader } from 'shared/ui'
import s from './RenderOnViewportEntry.module.scss'

interface RenderOnViewportEntryProps extends ObserverProps, PropsWithChildren {
  waitFor?: boolean
}

// TODO: solve the

const RenderOnViewportEntryInner = memo(
  ({
    root = null,
    rootMargin,
    threshold = 0,
    children
  }: RenderOnViewportEntryProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const entered = useFirstViewportEntry(ref, {
      root,
      rootMargin,
      threshold
    })

    return (
      <div className={classNames(s.wrapper)} ref={ref}>
        {entered && <Suspense fallback={<Loader />}>{children}</Suspense>}
        <div style={{ height: '100px' }}></div>
      </div>
    )
  }
)

export const RenderOnViewportEntry = memo(
  ({
    root = null,
    rootMargin,
    threshold = 0,
    children
  }: RenderOnViewportEntryProps) => {
    const timer = useRef<NodeJS.Timeout | null>(null)
    const [shouldRender, setShouldRender] = useState(false)

    useEffect(() => {
      timer.current = setTimeout(() => {
        setShouldRender(true)
      }, 1000)

      return () => {
        if (timer.current) clearTimeout(timer.current)
      }
    }, [])

    if (!shouldRender) return

    return (
      <RenderOnViewportEntryInner
        threshold={threshold}
        root={root}
        rootMargin={rootMargin}
      >
        {children}
      </RenderOnViewportEntryInner>
    )
  }
)
