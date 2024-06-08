import s from './Layout.module.scss'
import { classNames, useThrottle } from 'shared/lib'
import { MutableRefObject, ReactNode, UIEvent, useMemo, useRef } from 'react'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'
import { useDispatch, useSelector } from 'react-redux'
import { setScrollValue } from 'features/scroll-restoration'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { getScrollValue } from 'features/scroll-restoration/model/selectors/scrollRestorationSelectors'
import { TransitionProvider, useTransition } from 'shared/lib/'

interface LayoutProps {
  children?: ReactNode
  infiniteScrollCallback?: () => void
  dataTestId?: string
}

const LayoutInner = ({
  children,
  infiniteScrollCallback,
  dataTestId
}: LayoutProps) => {
  const { FramerMotion, isLoaded } = useTransition()
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>
  const innerRef = useRef() as MutableRefObject<HTMLDivElement>
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const scroll = useSelector((state) => getScrollValue(state, pathname))
  useInfiniteScroll(
    innerRef,
    {
      root: wrapperRef.current,
      threshold: 1,
      rootMargin: '0px'
    },
    infiniteScrollCallback
  )
  useInitialEffect(() => {
    if (!scroll) return
    wrapperRef.current.scrollTop = scroll
  })

  const doesHaveTransitions = false

  const onScrollHandler = useThrottle((e: UIEvent<HTMLElement>) => {
    dispatch(
      setScrollValue({
        value: e.currentTarget.scrollTop,
        path: pathname
      })
    )
  }, 200)

  const layoutWithTransition = useMemo(() => {
    return (
      isLoaded && (
        <FramerMotion.motion.main
          data-testid={dataTestId}
          ref={wrapperRef}
          onScroll={onScrollHandler}
          className={classNames(s.layout)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          {children}
          <div className={s['div-helper']} ref={innerRef} />
        </FramerMotion.motion.main>
      )
    )
  }, [isLoaded, children, dataTestId, onScrollHandler, FramerMotion])

  const layoutWithoutTransition = useMemo(() => {
    return (
      <main
        data-testid={dataTestId}
        ref={wrapperRef}
        onScroll={onScrollHandler}
        className={classNames(s.layout)}
      >
        {children}
        <div className={s['div-helper']} ref={innerRef} />
      </main>
    )
  }, [children, dataTestId, onScrollHandler])

  return doesHaveTransitions ? layoutWithTransition : layoutWithoutTransition
}

export const Layout = ({
  children,
  dataTestId,
  infiniteScrollCallback
}: LayoutProps) => {
  const doesHaveTransitions = false

  if (doesHaveTransitions) {
    return (
      <TransitionProvider>
        <LayoutInner
          dataTestId={dataTestId}
          infiniteScrollCallback={infiniteScrollCallback}
        >
          {children}
        </LayoutInner>
      </TransitionProvider>
    )
  }

  return (
    <LayoutInner
      dataTestId={dataTestId}
      infiniteScrollCallback={infiniteScrollCallback}
    >
      {children}
    </LayoutInner>
  )
}
