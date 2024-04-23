import { Roles } from 'entities/User/model/types/user'
import { ProtectedRoute } from '../../protected-route/ui/ProtectedRoute'
import { Suspense, memo } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routerConfig } from 'shared/config'

interface AppRouterProps {
  isSigned: boolean
}

const availableRoles: Roles[] = ['ADMIN', 'MANAGER']

export const AppRouter = ({ isSigned }: AppRouterProps) => {
  const routes = Object.entries(routerConfig).map(
    ([_, { element, authOnly, path }]) => {
      const el = <Suspense>{element}</Suspense>

      return (
        <Route
          key={path}
          path={path}
          element={
            authOnly ? (
              <ProtectedRoute
                availableRoles={availableRoles}
                authOnly={authOnly}
                isSignedIn={isSigned}
              >
                {el}
              </ProtectedRoute>
            ) : (
              el
            )
          }
        />
      )
    }
  )

  return <Routes>{routes}</Routes>
}

export default memo(AppRouter)
