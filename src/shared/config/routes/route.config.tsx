import { AboutPage } from 'pages/about-page'
import { MainPage } from 'pages/main-page'
import { ProfilePage } from 'pages/profile-page'
import { RouteProps } from 'react-router-dom'
import { NotFound } from 'widgets/not-found'

export enum Routes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found'
}

export const routes: Record<Routes, string> = {
  main: '/',
  about: '/about',
  profile: '/profile',
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
  profile: {
    path: routes.profile,
    element: <ProfilePage />
  },
  not_found: {
    path: routes.not_found,
    element: <NotFound />
  }
}
