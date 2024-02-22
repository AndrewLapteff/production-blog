import { Suspense, memo } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routerConfig } from 'shared/config'
import { PageLoader } from 'widgets/page-loader'

interface AppRouterProps {
  isSigned: boolean
}

export const AppRouter = ({ isSigned }: AppRouterProps) => {
  const routes = Object.values(routerConfig).filter(({ authOnly }) => {
    if (authOnly && !isSigned) return false
    return true
  })

  return (
    <Routes>
      {routes.map(({ path, element }) => {
        return (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<PageLoader />}>
                <div className="content-area">{element}</div>
              </Suspense>
            }
          />
        )
      })}
    </Routes>
  )
}

export default memo(AppRouter)
