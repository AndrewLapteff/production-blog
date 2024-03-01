import type { Meta, StoryObj } from '@storybook/react'
import { ArticleTextBlock } from './ArticleTextBlock'
import { ArticleDecorator } from 'shared/config/storybook/decorators/ArticleDecorator'

const meta = {
  title: 'entities/ArticleTextBlock',
  parameters: {
    layout: 'centered'
  },
  component: ArticleTextBlock,
  decorators: [ArticleDecorator]
} satisfies Meta<typeof ArticleTextBlock>

export default meta
type Story = StoryObj<typeof meta>

export const ArticleTextBlockLight: Story = {
  args: {
    block: {
      id: 1,
      type: 'text',
      title: 'Immutable Array Methods',
      text: [
        'With the ES14 version, Array.prototype added 4 new methods that change by copy: toReversed, toSorted, toSpliced, and with. These are immutable array methods, which make a copy of the array with the applied modifications without affecting the original array that they were called on.',
        'Any array method that creates a copy, always does so shallowly. If there is an object in the array, the object reference is copied into the new array. In this case, both the original and new array refer to the same object. So when the object changes, all properties referring to the object reflect the change. Keep this in mind when using these methods if you have nested data in your array. Primitive types such as strings, numbers and booleans, are copied by value into the new array, so there is no reference to the original array.'
      ]
    }
  }
}
