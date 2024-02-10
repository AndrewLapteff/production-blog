import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { BuildEnv } from './types'

interface BuildPluginsProps extends Pick<BuildEnv, 'analyze'> {
  html: string
  isDev: boolean
}

export const buildPlugins = ({
  html,
  isDev,
  analyze
}: BuildPluginsProps): webpack.WebpackPluginInstance[] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      IS_DEV: JSON.stringify(isDev)
    })
  ]

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin({}))
    plugins.push(new BundleAnalyzerPlugin({ analyzerMode: analyze }))
  }

  return plugins
}
