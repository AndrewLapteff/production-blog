import webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types'
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export const buildWebpackConfig = (
  props: BuildOptions
): webpack.Configuration => {
  const { paths, mode, analyze, apiUrl } = props
  const { build, entry, src } = paths

  const isDev = mode === 'development'
  return {
    mode,
    entry,
    output: {
      filename: '[name].[contenthash].js',
      path: build,
      clean: true,
      publicPath: '/',
      pathinfo: false
    },
    plugins: buildPlugins({
      isDev,
      analyze,
      apiUrl,
      paths
    }),
    module: {
      rules: buildLoaders(mode)
    },
    resolve: buildResolvers(src),
    devtool: mode === 'development' ? 'eval' : undefined,
    devServer: {
      historyApiFallback: true,
      compress: true
      // open: true,
    },
    optimization: {
      runtimeChunk: true,
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false
    }
  }
}
