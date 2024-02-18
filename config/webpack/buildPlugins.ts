import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack, { DefinePlugin, ProgressPlugin } from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { BuildEnv } from './types'

interface BuildPluginsProps extends Pick<BuildEnv, 'analyze' | 'apiUrl'> {
  html: string
  isDev: boolean
  apiUrl: string
}

export const buildPlugins = ({
  html,
  isDev,
  analyze,
  apiUrl
}: BuildPluginsProps): webpack.WebpackPluginInstance[] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: html
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new DefinePlugin({
      IS_DEV: JSON.stringify(isDev),
      API_URL: JSON.stringify(apiUrl)
    })
  ]

  if (isDev) {
    // plugins.push(new webpack.HotModuleReplacementPlugin({}))
    plugins.push(new BundleAnalyzerPlugin({ analyzerMode: analyze }))
  }

  return plugins
}
