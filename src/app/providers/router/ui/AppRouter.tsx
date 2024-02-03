import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { routerConfig } from 'shared/config'

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routerConfig).map(({ path, element }) => {
        return <Route path={path} element={<Suspense fallback="Loading">{element}</Suspense>} />
      })}
    </Routes>
  )
}

export default AppRouter
