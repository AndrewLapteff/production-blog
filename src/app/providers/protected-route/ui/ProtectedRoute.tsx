import { getUserRoles } from 'entities/User'
import { Roles } from 'entities/User/model/types/user'
import { PropsWithChildren, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { routes } from 'shared/config'

interface ProtectedRouteProps extends PropsWithChildren {
  isSignedIn: boolean
  authOnly?: boolean
  availableRoles?: Roles[]
}

export const ProtectedRoute = ({
  children,
  isSignedIn,
  authOnly,
  availableRoles
}: ProtectedRouteProps) => {
  const userRoles = useSelector(getUserRoles)
  console.log(userRoles)
  console.log(availableRoles)
  const hasProperRoles = useMemo(() => {
    if (!availableRoles) return true

    return availableRoles.some((value) => {
      // @ts-expect-error
      return userRoles.includes(value)
    })
  }, [availableRoles, userRoles])

  if (!hasProperRoles) {
    return <Navigate to={routes.main} />
  }
  if (!isSignedIn && authOnly) {
    return <Navigate to={routes.main} />
  }

  return children
}
