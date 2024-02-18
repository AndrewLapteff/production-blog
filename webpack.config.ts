import path from 'path'
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig'
import { BuildEnv } from './config/webpack/types'

export default (env: BuildEnv) => {
  const { mode, analyze } = env

  const apiUrl = env.apiUrl || 'http://localhost:4000'

  return buildWebpackConfig({
    mode,
    analyze,
    apiUrl,
    paths: {
      src: path.resolve(__dirname, 'src'),
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html')
    }
  })
}
