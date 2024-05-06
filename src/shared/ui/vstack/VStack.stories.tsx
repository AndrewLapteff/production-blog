import { VStack } from './VStack'

export default {
  title: 'shared/VStack',
  component: VStack,
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
  <VStack {...args}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </VStack>
)
Default.args = {
  gap: 'medium'
}

export const LargeGap = (args: Args) => (
  <VStack {...args}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </VStack>
)

LargeGap.args = {
  gap: 'large'
}

export const SmallGap = (args: Args) => (
  <VStack {...args}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </VStack>
)

SmallGap.args = {
  gap: 'small'
}
