import webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/config'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as webpackDevServer from 'webpack-dev-server'

export const buildWebpackConfig = ({
  mode,
  paths
}: BuildOptions): webpack.Configuration => {
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
    plugins: buildPlugins({ html, isDev }),
    module: {
      rules: buildLoaders(mode)
    },
    resolve: buildResolvers(src),
    devtool: mode === 'development' ? 'inline-source-map' : undefined,
    devServer: {
      historyApiFallback: true,
      // open: true,
      hot: true
    },
    cache: {
      type: 'filesystem'
    }
    // optimization: {
    //   runtimeChunk: 'single',
    // },
  }
}
