import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/navbar'
import 'shared/config/i18next/i18next.config'
import { Sidebar } from 'widgets/sidebar/ui/Sidebar'
import { ErrorBoundary } from './providers/error-boundary'
import { Modal } from 'widgets/modal'
import { Button } from 'shared/ui/button/Button'
import { useState } from 'react'

export const App = () => {
  const { theme } = useTheme()

  console.log(theme)
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
