import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { resources } from './resources'

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    resources
  })
  .catch((error: unknown) => {
    console.error(error)
  })

export default i18n
