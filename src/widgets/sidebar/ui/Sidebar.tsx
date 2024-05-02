import { memo, useState } from 'react'
import s from './Sidebar.module.scss'
import { classNames } from 'shared/lib'
import ArrowIcon from 'shared/assets/icons/arrow.svg'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'

export const Sidebar = memo(() => {
  const [isFolded, setIsFolded] = useState(true)
  const { t } = useTranslation('translation')

  const foldHandler = () => {
    setIsFolded((prev) => !prev)
  }

  return (
    <aside
      data-testid="sidebar"
      className={classNames(s.sidebar, { [s.folded]: isFolded })}
    >
      <section className={classNames(s['link-bar'])}></section>
      <section className={classNames(s['action-bar'])}>
        <Button
          variant="icon"
          data-testid="button"
          onClick={foldHandler}
          className={classNames(s.button)}
        >
          <ArrowIcon
            className={classNames(s.svg, { [s.twisted]: isFolded })}
            width={26}
            height={26}
          />
        </Button>
      </section>
    </aside>
  )
})
