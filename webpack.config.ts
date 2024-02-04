import path from 'path'
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig'
import { BuildEnv } from './config/webpack/types/config'

export default (env: BuildEnv) => {
  const { mode } = env

  return buildWebpackConfig({
    mode,
    paths: {
      src: path.resolve(__dirname, 'src'),
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html')
    }
  })
}