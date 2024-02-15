import { Modal } from 'widgets/modal'
import s from './AuthModal.module.scss'
import { Button } from 'shared/ui/button/Button'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/input'
import { ModalProps } from 'widgets/modal/ui/Modal'
import {
  setPassword,
  setUsername,
  setEmail
} from '../../../model/slice/loginSlice'
import { useAppSelector } from 'app/providers/store-provider/confg/store'
import { useDispatchCallback } from '../hooks/useDispatchCallback'
import { getLoginStore } from '../../../model/selectors/getLoginStore'
import { useCallback } from 'react'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import { loginByEmailAndPassword } from 'features/auth-by-username/model/services/getUserByEmail/getUserByEmail'
import { Text } from 'shared/ui/text/Text'

type AuthModalProps = Pick<ModalProps, 'setOpen' | 'isOpen' | 'width'>

export const AuthModal = ({ isOpen, setOpen, width = 30 }: AuthModalProps) => {
  const { t } = useTranslation('modal')

  const { username, email, isLoading, password, error } =
    useAppSelector(getLoginStore)

  const text = error?.response?.data
  const isErrorCorrert = error !== undefined && typeof text === 'string'

  const setUserNameCallback = useDispatchCallback(setUsername)
  const setPasswordCallback = useDispatchCallback(setPassword)
  const setEmailCallback = useDispatchCallback(setEmail)
  const thunkDispatch = useThunkDispatch()

  const postUserDataHandler = useCallback(() => {
    thunkDispatch(loginByEmailAndPassword({ password, email })).catch(
      (error) => {
        console.error(error) // fix
      }
    )
  }, [thunkDispatch, password, email])

  return (
    <>
      <Modal
        width={width}
        isOpen={isOpen}
        setOpen={setOpen}
        header={
          <Text className={s.header} text={t('registration')} theme="normal" />
        }
        main={
          <div className={s['main-section']}>
            <section className={s.credentials}>
              <Input onChange={setEmailCallback} value={email}>
                {t('email')}
              </Input>
              <Input onChange={setUserNameCallback} value={username}>
                {t('username')}
              </Input>
              <Input onChange={setPasswordCallback} value={password}>
                {t('password')}
              </Input>
            </section>
            {isErrorCorrert && <Text text={text} theme="error" />}
          </div>
        }
        footer={
          <Button
            onClick={postUserDataHandler}
            disabled={isLoading}
            size="m"
            variant="primary"
          >
            {t('register')}
          </Button>
        }
      />
    </>
  )
}
