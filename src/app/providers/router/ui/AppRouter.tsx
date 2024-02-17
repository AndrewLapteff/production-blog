import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routerConfig } from 'shared/config'
import { PageLoader } from 'widgets/page-loader'

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routerConfig).map(({ path, element }) => {
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

export default AppRouter
