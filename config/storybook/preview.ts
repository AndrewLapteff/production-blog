import type { Preview } from '@storybook/react'
import { RouterDecorator, StyleDecorator, ThemeDecorator } from 'shared/config'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview

export const decorators = [
  StyleDecorator,
  ThemeDecorator('light'),
  RouterDecorator
]

// addDecorator(cssVarsDecorator)
