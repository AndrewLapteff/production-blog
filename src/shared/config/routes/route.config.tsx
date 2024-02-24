import { AboutPage } from 'pages/about-page'
import { ArticlePage } from 'pages/article-page'
import { ArticlesPage } from 'pages/articles-page'
import { MainPage } from 'pages/main-page'
import { ProfilePage } from 'pages/profile-page'
import { RouteProps } from 'react-router-dom'
import { NotFound } from 'widgets/not-found'

export enum Routes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
  ARTICLE = 'article',
  ARTICLES = 'articles'
}

export const routes: Record<Routes, string> = {
  main: '/',
  about: '/about',
  profile: '/profile',
  article: '/article/',
  articles: '/articles',
  not_found: '*'
}

type ExtendedRouteProps = RouteProps & {
  authOnly?: boolean
  hide?: boolean
}

export const routerConfig: Record<Routes, ExtendedRouteProps> = {
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
    element: <ProfilePage />,
    authOnly: true
  },
  article: {
    path: routes.article + ':id',
    element: <ArticlePage />,
    hide: true
  },
  articles: {
    path: routes.articles,
    element: <ArticlesPage />
  },
  not_found: {
    path: routes.not_found,
    element: <NotFound />,
    hide: true
  }
}
