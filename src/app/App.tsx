import 'shared/config/i18next/i18next.config'
import { useTheme } from './providers/theme-provider'
import { classNames } from 'shared/lib'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar/ui/Sidebar'
import { ErrorBoundary } from './providers/error-boundary'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserSchema, getUser, setUser } from 'entities/User'
import { LOCAL_STORAGE_USER_KEY } from 'shared/config'

export const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const user = useSelector(getUser)

  useEffect(() => {
    const data = localStorage.getItem(LOCAL_STORAGE_USER_KEY)
    if (data) {
      const user = JSON.parse(data) as UserSchema
      if (user) dispatch(setUser(user)) // fix
    }
  }, [dispatch])

  return (
    <div className={classNames('.app', {}, [theme])}>
      <Navbar />
      <div className="main-area">
        <Sidebar />
        <ErrorBoundary>
          <AppRouter isSigned={!!user?.email} />
        </ErrorBoundary>
      </div>
    </div>
  )
}
