import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { RouteProps } from 'react-router-dom'

export enum Routes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const routes: Record<Routes, string> = {
  main: '/',
  about: '/about',
}

export const routerConfig: Record<Routes, RouteProps> = {
  main: {
    path: routes.main,
    element: <MainPage />,
  },
  about: {
    path: routes.about,
    element: <AboutPage />,
  },
}