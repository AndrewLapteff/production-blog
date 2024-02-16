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
import { useDispatchCallback } from '../hooks/useDispatchCallback'
import { useCallback } from 'react'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import { loginByEmailAndPassword } from 'features/auth-by-username/model/services/getUserByEmail/getUserByEmail'
import { Text } from 'shared/ui/text/Text'
import { useSelector } from 'react-redux'
import { getUsername } from '../../../model/selectors/getUsername/getUsername'
import { getEmail } from '../../../model/selectors/getEmail/getEmail'
import { getError } from '../../../model/selectors/getError/getError'
import { getIsLoading } from '../../../model/selectors/getIsLoading/getIsLoading'
import { getPassword } from '../../../model/selectors/getPassword/getPassword'
import { AxiosError, AxiosResponse } from 'axios'

type AuthModalProps = Pick<ModalProps, 'setOpen' | 'isOpen' | 'width'>

const AuthModal = ({ isOpen, setOpen, width = 30 }: AuthModalProps) => {
  const { t } = useTranslation('modal')

  const username = useSelector(getUsername)
  const password = useSelector(getPassword)
  const email = useSelector(getEmail)
  const error = useSelector(getError)
  const isLoading = useSelector(getIsLoading)

  const text = error?.response?.data
  const isErrorCorrert = error !== undefined && typeof text === 'string'

  const setUserNameCallback = useDispatchCallback(setUsername)
  const setPasswordCallback = useDispatchCallback(setPassword)
  const setEmailCallback = useDispatchCallback(setEmail)
  const thunkDispatch = useThunkDispatch()

  const postUserDataHandler = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    thunkDispatch(loginByEmailAndPassword({ password, email })).then((a) => {
      if (!(a.payload instanceof AxiosError)) {
        setOpen(false)
      }
    })
  }, [thunkDispatch, password, email, setOpen])

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
              <Input
                data-testid="email"
                onChange={setEmailCallback}
                value={email}
              >
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

export default AuthModal
