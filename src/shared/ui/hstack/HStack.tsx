import { Flex, FlexProps } from '../flex/Flex'

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = (props: HStackProps) => {
  const {
    align = 'center',
    justify = 'center',
    children,
    gap = 'medium',
    max,
    'data-testid': dataTestId,
    className
  } = props
  return (
    <Flex
      gap={gap}
      className={className}
      align={align}
      justify={justify}
      max={max}
      data-testid={dataTestId}
      direction="row"
    >
      {children}
    </Flex>
  )
}
