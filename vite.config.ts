import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr({ include: '**/*.svg', svgrOptions: { exportType: 'default' } })
  ],
  resolve: {
    alias: [
      { find: 'app', replacement: '/src/app' },
      { find: 'entities', replacement: '/src/entities' },
      { find: 'shared', replacement: '/src/shared' },
      { find: 'features', replacement: '/src/features' },
      { find: 'widgets', replacement: '/src/widgets' },
      { find: 'pages', replacement: '/src/pages' }
    ]
  },
  define: {
    IS_DEV: JSON.stringify(true),
    API_URL: JSON.stringify('http://localhost:4000'),
    PROJECT_ENV: JSON.stringify('frontend')
  }
})
