import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './app/styles/index.scss'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { App } from 'app/App'
import { Suspense } from 'react'
import { StoreProvider } from 'app/providers/store-provider'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <Suspense>
        <StoreProvider>
          <App />
        </StoreProvider>
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>
)
