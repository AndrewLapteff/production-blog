import { ChangeEvent, Dispatch, memo, SetStateAction } from 'react'
import { BrowserView } from 'react-device-detect'
import { HStack, Button, Input } from 'shared/ui'
import { Modal } from 'widgets/modal'
import { useTranslation } from 'react-i18next'

interface DesktopRatingProps {
  feedbachTitle?: string
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  onCancelHandler: () => void
  onAcceptHandler: () => void
  text: string
  onTextChange: (text: ChangeEvent<HTMLInputElement>) => void
}

export const DesktopRating = memo((props: DesktopRatingProps) => {
  const {
    feedbachTitle,
    isOpen,
    setIsOpen,
    onCancelHandler,
    onAcceptHandler,
    text,
    onTextChange
  } = props
  const { t } = useTranslation('article')

  return (
    <BrowserView>
      <Modal
        controls={
          <HStack>
            <Button onClick={onCancelHandler} variant="red">
              {t('decline')}
            </Button>
            <Button onClick={onAcceptHandler} variant="primary">
              {t('accept')}
            </Button>
          </HStack>
        }
        header={feedbachTitle}
        isOpen={isOpen}
        setOpen={setIsOpen}
      >
        <Input value={text} onChange={onTextChange} />
      </Modal>
    </BrowserView>
  )
})
