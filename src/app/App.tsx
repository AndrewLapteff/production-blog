import 'shared/config/i18next/i18next.config'
import { useTheme } from './providers/theme-provider'
import { classNames, useAppSelector } from 'shared/lib'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/navbar'
import { Sidebar } from 'widgets/sidebar/ui/Sidebar'
import { ErrorBoundary } from './providers/error-boundary'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { init } from 'entities/User'
import { getInited } from 'entities/User/model/selectors/getInited/getInited'

export const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const email = useAppSelector((store) => store.userReducer.user.email)
  const isInited = useSelector(getInited)

  useEffect(() => {
    dispatch(init())
  }, [dispatch])

  return (
    <div className={classNames('.app', {}, [theme])}>
      {isInited && <Navbar isSigned={!!email} />}
      <div className="main-area">
        <Sidebar />
        <ErrorBoundary>
          {isInited && <AppRouter isSigned={!!email} />}
        </ErrorBoundary>
      </div>
    </div>
  )
}
