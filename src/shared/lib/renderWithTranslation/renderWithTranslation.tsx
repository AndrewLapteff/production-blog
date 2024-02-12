import { I18nextProvider } from 'react-i18next'
import { ReactNode } from 'react'
import config from 'shared/config/i18next/i18n.test.config'
import { render } from '@testing-library/react'

export const renderWithTranslation = (children: ReactNode) => {
  return render(<I18nextProvider i18n={config}>{children}</I18nextProvider>)
}
