import { ChangeEvent, forwardRef } from 'react'
import { MobileView } from 'react-device-detect'
import { AnimationProvider } from 'shared/lib/components/animation-provider/AnimationProvicer'
import { VStack, Title, HStack, Input, Button } from 'shared/ui'
import { Drawer } from 'widgets/drawer'
import { useTranslation } from 'react-i18next'

interface RatingProps {
  onCancel: () => void
  onAccept: () => void
  text: string
  onTextChange: (text: ChangeEvent<HTMLInputElement>) => void
  feedbachTitle?: string
  isDrawerOpen: boolean
}

export const MobileRating = forwardRef((props: RatingProps, ref) => {
  const {
    feedbachTitle,
    onCancel,
    onAccept,
    text,
    onTextChange,
    isDrawerOpen
  } = props
  const { t } = useTranslation('article')

  return (
    <MobileView>
      <AnimationProvider>
        <Drawer height={140} ref={ref}>
          {isDrawerOpen && (
            <VStack align="center">
              <Title size="l" max h="h3" align="center">
                {feedbachTitle}
              </Title>
              <HStack max justify="center">
                <Input value={text} onChange={onTextChange} />
              </HStack>
              <HStack max justify="space-around">
                <Button size="l" onClick={onCancel} variant="red">
                  {t('decline')}
                </Button>
                <Button size="l" onClick={onAccept} variant="primary">
                  {t('accept')}
                </Button>
              </HStack>
            </VStack>
          )}
        </Drawer>
      </AnimationProvider>
    </MobileView>
  )
})
