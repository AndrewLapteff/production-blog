import path from 'path'
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig'
import { BuildEnv } from './config/webpack/types/config'

export default (env: BuildEnv) => {
  const { mode, analyze } = env

  return buildWebpackConfig({
    mode,
    analyze,
    paths: {
      src: path.resolve(__dirname, 'src'),
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html')
    }
  })
}
