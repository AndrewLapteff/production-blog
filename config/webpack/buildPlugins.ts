import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { BuildEnv } from './types/config'

interface BuildPluginsProps extends Pick<BuildEnv, 'analyze'> {
  html: string
  isDev: boolean
}

export const buildPlugins = ({
  html,
  isDev,
  analyze
}: BuildPluginsProps): webpack.WebpackPluginInstance[] => {
  return [
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
    }),
    new webpack.HotModuleReplacementPlugin({}),
    new BundleAnalyzerPlugin({ analyzerMode: analyze })
  ]
}
