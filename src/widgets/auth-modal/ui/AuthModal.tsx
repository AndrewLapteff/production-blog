import { Modal } from 'widgets/modal'
import s from './AuthModal.module.scss'
import { Button } from 'shared/ui/button/Button'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/input'
import { ModalProps } from 'widgets/modal/ui/Modal'

type AuthModalProps = Pick<ModalProps, 'setOpen' | 'isOpen' | 'width'>

export const AuthModal = ({ isOpen, setOpen, width = 30 }: AuthModalProps) => {
  const { t } = useTranslation('modal')

  return (
    <Modal
      width={width}
      isOpen={isOpen}
      setOpen={setOpen}
      header={<div className={s.header}>{t('registration')}</div>}
      main={
        <section className={s.credentials}>
          <Input>{t('email')}</Input>
          <Input>{t('username')}</Input>
          <Input>{t('password')}</Input>
        </section>
      }
      footer={
        <Button size="m" variant="primary">
          {t('register')}
        </Button>
      }
    />
  )
}
