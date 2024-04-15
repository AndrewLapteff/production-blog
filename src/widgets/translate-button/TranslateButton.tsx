import { Button } from '../../shared/ui/button/Button'
import { useTranslation } from 'react-i18next'
import LanguageIcon from 'shared/assets/icons/language.svg'
import { memo } from 'react'

export const TranslateButton = memo(() => {
  const { i18n } = useTranslation('main')

  const changeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'uk' : 'en').catch((error) => {
      console.error(error)
    })
  }

  return (
    <Button size="m" onClick={changeLanguageHandler} variant="icon">
      <LanguageIcon width={23} height={23} />
    </Button>
  )
})
