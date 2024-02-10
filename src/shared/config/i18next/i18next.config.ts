import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import translationEN from '../../../../public/locales/en/translation.json'
import translationUK from '../../../../public/locales/uk/translation.json'
import mainEN from '../../../../public/locales/en/main.json'
import mainUK from '../../../../public/locales/uk/main.json'
import aboutEN from '../../../../public/locales/en/about.json'
import aboutUK from '../../../../public/locales/uk/about.json'

i18n
  .use(Backend) // passes i18n down to react-i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: IS_DEV,
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
    },
    // interpolation: {
    //   escapeValue: false,
    // },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    ns: ['main', 'about', 'translation']
  })
  .catch((error) => {
    console.error(error)
  })
