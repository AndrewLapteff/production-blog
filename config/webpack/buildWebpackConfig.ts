import webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlagins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/config'

export const buildWebpackConfig = ({ mode, paths }: BuildOptions): webpack.Configuration => {
  const { build, entry, html } = paths

  return {
    mode: mode,
    entry: entry,
    output: {
      filename: '[name].[contenthash].js',
      path: build,
      clean: true
    },
    plugins: buildPlugins(html),
    module: {
      rules: buildLoaders(mode)
    },
    resolve: buildResolvers(),
    devtool: mode === 'development' ? 'inline-source-map' : undefined,
    // optimization: {
    //   runtimeChunk: 'single',
    // },
  }
}