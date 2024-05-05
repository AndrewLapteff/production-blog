import { useTranslation } from 'react-i18next'
import { ChangeEvent, memo, useState } from 'react'
import { Button, RatingStars, Title, VStack } from 'shared/ui'
import { useDrawer } from 'shared/lib'
import { MobileRating } from './MobileRating/MobileRating'
import { DesktopRating } from './DesktopRating/DesktopRating'
import { MobileView } from 'react-device-detect'

interface RatingProps {
  stars: number
  size: number
  title?: string
  feedbachTitle?: string
  hasFeedback?: boolean
  onCancel?: () => void
  onAccept?: () => void
}

export const Rating = memo((props: RatingProps) => {
  const { size, stars, title, feedbachTitle, hasFeedback, onAccept, onCancel } =
    props
  const [text, setText] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { drawerRef, isDrawerOpen, openDrawer } = useDrawer()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onSelect = (star: number) => {
    if (hasFeedback) {
      console.log('f')
      setIsOpen(true)
    } else {
      onAccept?.()
    }
    console.log(star)
  }

  const onAcceptHandler = () => {
    setIsOpen(false)
    onAccept?.()
  }

  const onCancelHandler = () => {
    setIsOpen(false)
    onCancel?.()
  }

  const { t } = useTranslation('article')
  return (
    <VStack>
      {title && (
        <Title h="h3" align="center">
          {title}
        </Title>
      )}
      {hasFeedback && isOpen && (
        <>
          <DesktopRating
            feedbachTitle={feedbachTitle}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onCancelHandler={onCancelHandler}
            onAcceptHandler={onAcceptHandler}
            text={text}
            onTextChange={onChange}
          />
          <MobileRating
            feedbachTitle={feedbachTitle}
            onCancel={onCancelHandler}
            onAccept={onAcceptHandler}
            text={text}
            onTextChange={onChange}
            ref={drawerRef}
            isDrawerOpen={isDrawerOpen}
          />
        </>
      )}
      <RatingStars size={size} stars={stars} onSelect={onSelect} />
      <MobileView>
        <Button size="l" onClick={openDrawer}>
          {t('submit')}
        </Button>
      </MobileView>
    </VStack>
  )
})
