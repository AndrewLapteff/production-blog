import path from 'path'
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig'
import { BuildEnv } from './config/webpack/types/config'

export default (env: BuildEnv) => {
  let { mode } = env

  return buildWebpackConfig({
    mode,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html')
    }
  })
}

