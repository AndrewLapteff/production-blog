import { lazy } from 'react'

export const AuthModalAsync = lazy(async () => await import('./AuthModal'))
