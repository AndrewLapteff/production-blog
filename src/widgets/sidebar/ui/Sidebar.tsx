import { memo, useEffect, useState } from 'react'
import s from './Sidebar.module.scss'
import { classNames } from 'shared/lib'
import ArrowIcon from 'shared/assets/arrow.svg'
import { useTranslation } from 'react-i18next'

export const Sidebar = memo(() => {
  const [isFolded, setIsFolded] = useState(true)
  const { t } = useTranslation('translation')

  useEffect(() => {
    setIsFolded((prev) => !prev)
  }, [])

  const foldHandler = () => {
    setIsFolded((prev) => !prev)
  }

  return (
    <aside
      data-testid="sidebar"
      className={classNames(s.sidebar, { [s.folded]: isFolded })}
    >
      <section className={classNames(s['link-bar'])}>{t('sidebar')}</section>
      <section className={classNames(s['action-bar'])}>
        <button
          type="button"
          data-testid="button"
          onClick={foldHandler}
          className={classNames(s.button)}
        >
          <ArrowIcon
            className={classNames(s.svg, { [s.twisted]: isFolded })}
            width={26}
            height={26}
          />
        </button>
      </section>
    </aside>
  )
})
