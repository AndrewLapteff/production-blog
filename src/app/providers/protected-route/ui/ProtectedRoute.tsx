import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { routes } from 'shared/config'

interface ProtectedRouteProps extends PropsWithChildren {
  isSignedIn: boolean
  authOnly?: boolean
}

export const ProtectedRoute = ({
  children,
  isSignedIn,
  authOnly
}: ProtectedRouteProps) => {
  if (!isSignedIn && authOnly) {
    return <Navigate to={routes.main} />
  }

  return children
}
