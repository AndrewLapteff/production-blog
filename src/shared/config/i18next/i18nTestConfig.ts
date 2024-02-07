import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',

    debug: false,

    interpolation: {
      escapeValue: false
    },

    resources: { en: { translation: {} } }
  })
  .catch((error: unknown) => {
    console.error(error)
  })

export default i18n
