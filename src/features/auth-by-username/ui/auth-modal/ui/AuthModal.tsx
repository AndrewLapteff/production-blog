import { useCallback } from 'react'
import { AxiosError } from 'axios'
import { useSelector } from 'react-redux'
import { Modal, ModalProps } from 'widgets/modal'
import { useTranslation } from 'react-i18next'

import { Button, Text, Input } from 'shared/ui/'
import s from './AuthModal.module.scss'
import { useDispatchCallback } from '../hooks/useDispatchCallback'
import { useThunkDispatch } from '../hooks/useThunkDispatch'
import {
  setPassword,
  setUsername,
  setEmail
} from '../../../model/slice/loginSlice'
import {
  getUsername,
  getPassword,
  getEmail,
  getError,
  getIsLoading
} from '../../../model/selectors'
import { loginByEmailAndPassword } from '../../../model/services/getUserByEmail/getUserByEmail'

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
    thunkDispatch(loginByEmailAndPassword({ password, email }))
      .then((a) => {
        if (!(a.payload instanceof AxiosError)) {
          setOpen(false)
        }
      })
      .catch((error) => {
        console.log(error)
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
