import { getUser, logout } from 'entities/User'
import { t } from 'i18next'
import { memo, Suspense, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { routes } from 'shared/config'
import { Button } from 'shared/ui'
import { Dropdown, DropDownItem } from 'shared/ui/dropdown/Dropdown'
import SettingsIcon from 'shared/assets/icons/settings.svg'
import LogoutIcon from 'shared/assets/icons/logout.svg'
import { loginReducer, AuthModal } from 'features/auth-by-username'
import { DynamicSliceLoader } from 'shared/lib'

export const SettingsButton = memo(({ username }: { username: string }) => {
  const userInfo = useSelector(getUser)
  const dispatch = useDispatch()
  const [isOpen, setOpen] = useState(false)

  const openHandler = () => {
    setOpen(true)
  }

  const dropdownItems = useMemo((): DropDownItem[] => {
    return [
      { content: 'Profile', href: routes.profile, icon: SettingsIcon },
      {
        content: 'Quit',
        onClick: () => {
          dispatch(logout())
        },
        icon: LogoutIcon
      }
    ]
  }, [dispatch])

  return (
    <>
      {userInfo.email === '' ? (
        <Button size="m" variant="background" onClick={openHandler}>
          {t('login')}
        </Button>
      ) : (
        <Dropdown
          title={username}
          items={dropdownItems}
          label={<SettingsIcon width={23} height={23} />}
        />
      )}
      {isOpen && (
        <Suspense>
          <DynamicSliceLoader
            name="loginReducer"
            reducer={loginReducer}
            removeAfterUnmount
          >
            <AuthModal width={25} isOpen={isOpen} setOpen={setOpen} />
          </DynamicSliceLoader>
        </Suspense>
      )}
    </>
  )
})
