import s from './Layout.module.scss'
import { classNames } from 'shared/lib'
import { memo, MutableRefObject, ReactNode, useRef } from 'react'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'

interface LayoutProps {
  children?: ReactNode
  callback?: () => void
}

export const Layout = memo(({ children, callback }: LayoutProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>
  const innerRef = useRef() as MutableRefObject<HTMLDivElement>

  useInfiniteScroll(
    innerRef,
    {
      root: wrapperRef.current,
      threshold: 1,
      rootMargin: '0px'
    },
    callback
  )

  return (
    <section className={classNames(s.layout)}>
      {children}
      <div style={{ marginBottom: '20px' }} ref={innerRef}></div>
    </section>
  )
})
