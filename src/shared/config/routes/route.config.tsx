import { Roles } from 'entities/User/model/types/user'
import { AboutPage } from 'pages/about-page'
import { AdminPanel } from 'pages/admin-panel'
import { ArticleEditPage } from 'pages/article-edit-page'
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
  PROFILES = 'profiles',
  NOT_FOUND = 'not_found',
  ARTICLE = 'article',
  ARTICLES = 'articles',
  ARTICLE_EDIT = 'article_edit',
  ARTICLE_NEW = 'article_new',
  ADMIN = 'admin'
}

export const routes: Record<Routes, string> = {
  main: '/',
  about: '/about',
  profile: '/profile',
  profiles: '/profiles/',
  article: '/article/',
  articles: '/articles',
  article_edit: '/article/:id/edit/',
  article_new: '/article/new',
  admin: '/admin',
  not_found: '*'
}

type ExtendedRouteProps = RouteProps & {
  authOnly?: boolean
  hide?: boolean
  roles?: Roles[]
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
  profiles: {
    path: routes.profiles + ':id',
    element: <ProfilePage />,
    hide: true
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
  article_edit: {
    path: routes.article_edit,
    element: <ArticleEditPage />,
    hide: true
  },
  article_new: {
    path: routes.article_new,
    element: <ArticleEditPage />,
    hide: true
  },
  admin: {
    path: routes.admin,
    element: <AdminPanel />,
    hide: true,
    authOnly: true,
    roles: ['ADMIN', 'MANAGER']
  },
  not_found: {
    path: routes.not_found,
    element: <NotFound />,
    hide: true
  }
}
