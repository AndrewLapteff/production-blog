import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/navbar'
import 'shared/config/i18next/i18next.config'
import { Sidebar } from 'widgets/sidebar/ui/Sidebar'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('.app', {}, [theme])}>
      <Navbar />
      <div className="main-area">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}
