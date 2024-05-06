import { HStack } from './HStack'

export default {
  title: 'shared/HStack',
  component: HStack,
  argTypes: {
    gap: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    }
  }
}

interface Args {
  gap: 'small' | 'medium' | 'large'
}

export const Default = (args: Args) => (
  <HStack {...args}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </HStack>
)
Default.args = {
  gap: 'medium'
}

export const LargeGap = (args: Args) => (
  <HStack {...args}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </HStack>
)

LargeGap.args = {
  gap: 'large'
}

export const SmallGap = (args: Args) => (
  <HStack {...args}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </HStack>
)
SmallGap.args = {
  gap: 'small'
}
