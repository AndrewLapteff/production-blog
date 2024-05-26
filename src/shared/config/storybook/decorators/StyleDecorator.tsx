import { Story } from '@storybook/react'
import 'app/styles/index.scss'
import { ReactElement } from 'react'

export const StyleDecorator = (Story: Story) => (
  <div style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
    <Story />
  </div>
)

export const StyleProvider = ({ children }: { children: ReactElement }) => (
  <div style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>{children}</div>
)
