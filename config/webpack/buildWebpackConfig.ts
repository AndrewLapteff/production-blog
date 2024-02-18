import webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as webpackDevServer from 'webpack-dev-server'

export const buildWebpackConfig = (
  props: BuildOptions
): webpack.Configuration => {
  const { paths, mode, analyze, apiUrl } = props
  const { build, entry, html, src } = paths

  const isDev = mode === 'development'
  return {
    mode,
    entry,
    output: {
      filename: '[name].[contenthash].js',
      path: build,
      clean: true
    },
    plugins: buildPlugins({ html, isDev, analyze, apiUrl }),
    module: {
      rules: buildLoaders(mode)
    },
    resolve: buildResolvers(src),
    devtool: mode === 'development' ? 'inline-source-map' : undefined,
    devServer: {
      historyApiFallback: true
      // open: true,
    }
    // optimization: {
    //   runtimeChunk: 'single',
    // },
  }
}
