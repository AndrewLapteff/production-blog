import { Flex, FlexProps } from '../flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = (props: HStackProps) => {
  const {
    align = 'center',
    justify = 'center',
    children,
    gap = 'medium',
    max,
    className
  } = props
  return (
    <Flex
      gap={gap}
      className={className}
      align={align}
      justify={justify}
      max={max}
      direction="row"
    >
      {children}
    </Flex>
  )
}
