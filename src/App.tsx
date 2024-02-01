import { Route, Routes } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'
import { useTheme } from './hooks/useTheme'
import { classNames } from './helpers/classNames'

export const App = () => {
  const { theme, changeTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={changeTheme}>O</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Routes>
        <Route
          path={'/about'}
          element={
            <Suspense fallback="loading">
              <AboutPageAsync />
            </Suspense>
          }
        />
        <Route
          path={'/'}
          element={
            <Suspense fallback="loading">
              <MainPageAsync />
            </Suspense>
          }
        />
      </Routes>
    </div>
  )
}
