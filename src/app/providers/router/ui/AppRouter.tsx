import { ProtectedRoute } from '../../protected-route/ui/ProtectedRoute'
import { Suspense, memo } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routerConfig } from 'shared/config'
import { PageLoader } from 'widgets/page-loader'

interface AppRouterProps {
  isSigned: boolean
}

export const AppRouter = ({ isSigned }: AppRouterProps) => {
  const routes = Object.entries(routerConfig).map(
    ([_, { element, authOnly, path }]) => {
      const el = (
        <Suspense fallback={<PageLoader />}>
          <div className="content-area">{element}</div>
        </Suspense>
      )
      return (
        <Route
          key={path}
          path={path}
          element={
            authOnly ? (
              <ProtectedRoute authOnly={authOnly} isSignedIn={isSigned}>
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
