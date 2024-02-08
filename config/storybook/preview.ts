import type { Preview } from '@storybook/react'
import StyleDecorator from '../../src/shared/config/storybook/decorators/StyleDecorator'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

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

export const decorators = [StyleDecorator, ThemeDecorator('light')]

// addDecorator(cssVarsDecorator)
