import s from './Layout.module.scss'
import { classNames, useThrottle } from 'shared/lib'
import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'
import { useDispatch, useSelector } from 'react-redux'
import { setScrollValue } from 'features/scroll-restoration'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from 'shared/lib/hooks/useEnviroment'
import { getScrollValue } from 'features/scroll-restoration/model/selectors/scrollRestorationSelectors'

interface LayoutProps {
  children?: ReactNode
  callback?: () => void
}

export const Layout = ({ children, callback }: LayoutProps) => {
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
    callback
  )

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scroll
  })

  const onScrollHandler = useThrottle((e: UIEvent<HTMLElement>) => {
    dispatch(
      setScrollValue({
        value: e.currentTarget.scrollTop,
        path: pathname
      })
    )
  }, 500)

  return (
    <section
      ref={wrapperRef}
      onScroll={onScrollHandler}
      className={classNames(s.layout)}
    >
      {children}
      <div className={s['div-helper']} ref={innerRef}></div>
    </section>
  )
}
