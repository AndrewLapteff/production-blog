import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from '../../../../public/locales/en/translation.json'
import translationUK from '../../../../public/locales/uk/translation.json'
import mainEN from '../../../../public/locales/en/main.json'
import mainUK from '../../../../public/locales/uk/main.json'
import aboutEN from '../../../../public/locales/en/about.json'
import aboutUK from '../../../../public/locales/uk/about.json'

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',

    debug: false,

    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: translationEN,
        main: mainEN,
        about: aboutEN
      },
      uk: {
        translation: translationUK,
        main: mainUK,
        about: aboutUK
        // translation: translationUK
      }
    }
  })
  .catch((error: unknown) => {
    console.error(error)
  })

export default i18n
