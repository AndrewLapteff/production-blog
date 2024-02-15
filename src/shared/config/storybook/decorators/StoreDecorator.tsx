import { Story } from '@storybook/react'
import { StoreProvider } from 'app/providers/store-provider'

export const StoreDecorator = (Story: Story) => (
  <StoreProvider>
    <Story />
  </StoreProvider>
)
