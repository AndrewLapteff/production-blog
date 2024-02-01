import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { useTheme } from './providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { classNames } from 'shared/lib/classNames'
import { AppRouter } from './providers/router'

export const App = () => {
  const { theme, changeTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={changeTheme}>O</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <AppRouter />
    </div>
  )
}
