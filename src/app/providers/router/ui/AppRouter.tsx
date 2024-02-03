import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { routerConfig } from 'shared/config'

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routerConfig).map(({ path, element }) => {
        return (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback="Loading">
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
