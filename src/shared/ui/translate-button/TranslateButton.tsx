import { ReactNode } from 'react'
import { Button } from '../button/Button'
import { useTranslation } from 'react-i18next'
import LanguageIcon from '../../assets/language.svg'

export const TranslateButton = () => {
  const { i18n } = useTranslation('main')

  const changeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language == 'en' ? 'uk' : 'en')
  }

  return (
    <Button onClick={changeLanguageHandler} variant="icon">
      <LanguageIcon width={23} height={23} />
    </Button>
  )
}
