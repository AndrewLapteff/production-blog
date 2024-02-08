import webpack from 'webpack'
import p from 'path'

export const buildResolvers = (path: string): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'], // import component from './file' no need for extension
    preferAbsolute: true,
    modules: [path, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}
