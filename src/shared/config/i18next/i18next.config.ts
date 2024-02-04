import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Backend) // passes i18n down to react-i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: IS_DEV,
    // interpolation: {
    //   escapeValue: false,
    // },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    ns: ['main', 'about']
  })
  .catch((error) => {
    console.error(error)
  })
