import 'shared/config/i18next/i18next.config'
import { useTheme } from './providers/theme-provider'
import { classNames } from 'shared/lib'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar/ui/Sidebar'
import { ErrorBoundary } from './providers/error-boundary'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { UserSchema, setUser } from 'entities/User'
import { LOCAL_STORAGE_USER_KEY } from 'shared/config'

export const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    const data = localStorage.getItem(LOCAL_STORAGE_USER_KEY)
    const user = JSON.parse(data) as UserSchema
    if (user) dispatch(setUser(user)) // fix
  }, [dispatch])

  return (
    <div className={classNames('.app', {}, [theme])}>
      <Navbar />
      <div className="main-area">
        <Sidebar />
        <ErrorBoundary>
          <AppRouter />
        </ErrorBoundary>
      </div>
    </div>
  )
}
