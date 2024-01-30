import webpack from 'webpack'

export const buildResolvers = (): webpack.ResolveOptions => {
  return {
    extensions: [ '.tsx', '.ts', '.js' ], // import component from './file' no need for extension
  }
}