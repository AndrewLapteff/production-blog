import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './app/styles/index.scss'
import { ThemeProvider } from 'app/providers/theme-provider'
import { App } from 'app/App'
import { Suspense } from 'react'
import { StoreProvider } from 'app/providers/store-provider'
import { userReducer } from 'entities/User'
import { StoreProps } from 'app/providers/store-provider/types/Schema'
import { scrollRestorationSliceReducer } from 'features/scroll-restoration'
import { rtkApi } from 'shared/api/rtkQuery'
import { AnimatePresence } from 'framer-motion'

const container = document.getElementById('root')
const initialStore: StoreProps = {
  userReducer: {
    user: {
      id: 0,
      username: '',
      email: ''
    },
    accessToken: ''
  },
  scrollRestorationSliceReducer: {}
}

const asyncReducers = {
  [rtkApi.reducerPath]: rtkApi.reducer,
  userReducer,
  scrollRestorationSliceReducer
}

if (container) {
  const root = createRoot(container)

  root.render(
    <BrowserRouter>
      <ThemeProvider>
        <Suspense>
          <StoreProvider
            initialState={initialStore}
            asyncReducers={asyncReducers}
          >
            <AnimatePresence mode="wait">
              <App />
            </AnimatePresence>
          </StoreProvider>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  )
}
