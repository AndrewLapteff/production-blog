import { Flex, FlexProps } from '../flex/Flex'

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
  const {
    align = 'center',
    justify = 'center',
    children,
    gap = 'medium',
    className,
    'data-testid': dataTestId
  } = props
  return (
    <Flex
      gap={gap}
      className={className}
      align={align}
      justify={justify}
      data-testid={dataTestId}
      direction="column"
    >
      {children}
    </Flex>
  )
}
