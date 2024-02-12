import { useTranslation } from 'react-i18next'
import s from './Navbar.module.scss'
import { classNames } from 'shared/lib'
import { AppLink, ThemeSwitcher } from 'shared/ui'
import { TranslateButton } from 'shared/ui/translate-button/TranslateButton'
import { Button } from 'shared/ui/button/Button'
import { Modal } from 'widgets/modal'
import { useState } from 'react'

export const Navbar = () => {
  const { t } = useTranslation()
  const [isOpen, setOpen] = useState(false)

  const click = () => {
    setOpen(true)
  }
  return (
    <nav className={classNames(s.navbar)}>
      <div className={classNames(s.links)}>
        <AppLink theme="primary" to="/">
          {t('main', { ns: 'main' })}
        </AppLink>
        <AppLink theme="primary" to="/about">
          {t('about', { ns: 'about' })}
        </AppLink>
        <ThemeSwitcher />
        <TranslateButton />
        <Button size="m" variant="background" onClick={click}>
          {t('login')}
        </Button>
        {/* <Modal
          setOpen={setOpen}
          isOpen={isOpen}
          header={'Header'}
          main={'saldjaldjkalsdl'}
          footer={
            <>
              <Button size="m" variant="primary">
                Yes
              </Button>
              <Button size="m" variant="primary">
                Yes
              </Button>
            </>
          }
        ></Modal> */}
      </div>
    </nav>
  )
}
