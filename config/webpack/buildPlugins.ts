import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

interface BuildPluginsProps {
  html: string
  isDev: boolean
}

export const buildPlugins = ({
  html,
  isDev
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
    new webpack.HotModuleReplacementPlugin({})
  ]
}
