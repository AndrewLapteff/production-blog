import { Story } from '@storybook/react'
import { THEME } from 'app/providers/theme-provider/lib/ThemeContext'

export const ThemeDecorator = (theme: THEME) => (StoryComponent: Story) => {
  return (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  )
}
