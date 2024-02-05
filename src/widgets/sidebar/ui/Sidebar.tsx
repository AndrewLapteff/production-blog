import { useEffect, useState } from 'react'
import s from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames'
import ArrowIcon from 'shared/assets/arrow.svg'

export const Sidebar = () => {
  const [isFolded, setIsFolded] = useState(true)

  useEffect(() => {
    setIsFolded((prev) => !prev)
  }, [])

  const foldHandler = () => {
    setIsFolded((prev) => !prev)
  }

  return (
    <aside className={classNames(s.sidebar, { [s.folded]: isFolded })}>
      <section className={classNames(s['link-bar'])}></section>
      <section className={classNames(s['action-bar'])}>
        <button
          type="button"
          onClick={foldHandler}
          className={classNames(s.button)}
        >
          <ArrowIcon
            className={classNames(s.svg, { [s.twisted]: isFolded })}
            width={27}
            height={27}
          />
        </button>
      </section>
    </aside>
  )
}
