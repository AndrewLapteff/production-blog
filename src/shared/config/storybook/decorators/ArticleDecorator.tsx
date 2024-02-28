import { Story } from '@storybook/react'

export const ArticleDecorator = (Story: Story) => {
  return (
    <div
      style={{
        width: '50vw'
      }}
    >
      <Story />
    </div>
  )
}
