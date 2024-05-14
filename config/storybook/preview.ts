import type { Preview } from '@storybook/react'
import { RouterDecorator, StyleDecorator, ThemeDecorator } from 'shared/config'

const preview: Preview = {
  parameters: {
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: 'light', color: '#ffffff' },
        { name: 'dark', class: 'dark', color: '#000000' }
      ]
    },
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
