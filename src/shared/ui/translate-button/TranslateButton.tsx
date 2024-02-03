import { ReactNode } from 'react'
import { Button } from '../button/Button'
import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'

interface TranslateButton {
  children?: ReactNode
}

export const TranslateButton = ({ children }: TranslateButton) => {
  const { i18n } = useTranslation()

  const changeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language == 'en' ? 'ru' : 'en')
  }

  return (
    <Button onClick={changeLanguageHandler} variant="primary">
      {children}
    </Button>
  )
}
