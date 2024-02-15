import { Story } from '@storybook/react'
import 'app/styles/index.scss'

export const StyleDecorator = (Story: Story) => (
  <div style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
    <Story />
  </div>
)
