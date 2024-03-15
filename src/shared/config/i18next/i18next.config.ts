import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import { resources } from './resources'

export default i18n
  .use(Backend) // passes i18n down to react-i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    ns: ['main', 'about', 'translation']
  })
  .catch((error) => {
    console.error(error)
  })
