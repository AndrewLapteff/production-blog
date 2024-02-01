import webpack from 'webpack'

export const buildResolvers = (path: string): webpack.ResolveOptions => {
  console.log('---------------', path)
  return {
    extensions: [ '.tsx', '.ts', '.js' ], // import component from './file' no need for extension
    preferAbsolute: true,
    modules: [ path, 'node_modules' ],
    mainFiles: [ 'index' ],
    alias: {},
  }
}