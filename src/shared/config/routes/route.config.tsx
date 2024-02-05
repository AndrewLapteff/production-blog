import { AboutPage } from 'pages/about-page'
import { MainPage } from 'pages/main-page'
import { RouteProps } from 'react-router-dom'
import { NotFound } from 'widgets/not-found'

export enum Routes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

export const routes: Record<Routes, string> = {
  main: '/',
  about: '/about',
  not_found: '*'
}

export const routerConfig: Record<Routes, RouteProps> = {
  main: {
    path: routes.main,
    element: <MainPage />
  },
  about: {
    path: routes.about,
    element: <AboutPage />
  },
  not_found: {
    path: routes.not_found,
    element: <NotFound />
  }
}
