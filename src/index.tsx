import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './app/styles/index.scss'
import { ThemeProvider } from 'app/providers/theme-provider'
import { App } from 'app/App'
import { Suspense } from 'react'
import { StoreProvider } from 'app/providers/store-provider'
import { userReducer } from 'entities/User'

const container = document.getElementById('root')
const initialStore = {
  loginReducer: {
    username: '',
    password: '',
    email: '',
    isLoading: false,
    error: undefined
  },
  userReducer: {
    user: {
      id: 1,
      username: '',
      email: ''
    },
    accessToken: ''
  }
}

if (container) {
  const root = createRoot(container)

  root.render(
    <BrowserRouter>
      <ThemeProvider>
        <Suspense>
          <StoreProvider
            initialState={initialStore}
            asyncReducers={{ userReducer }}
          >
            <App />
          </StoreProvider>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  )
}
