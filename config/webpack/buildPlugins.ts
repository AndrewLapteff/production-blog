import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack, { DefinePlugin, ProgressPlugin, DllPlugin } from 'webpack'
import CopyPlugin from 'copy-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { BuildEnv, Paths } from './types'

interface BuildPluginsProps extends Pick<BuildEnv, 'analyze' | 'apiUrl'> {
  isDev: boolean
  apiUrl: string
  paths: Paths
}

export const buildPlugins = ({
  isDev,
  analyze,
  apiUrl,
  paths
}: BuildPluginsProps): webpack.WebpackPluginInstance[] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new DefinePlugin({
      IS_DEV: JSON.stringify(isDev),
      API_URL: JSON.stringify(apiUrl),
      PROJECT_ENV: JSON.stringify('frontend')
    })
    // new CopyPlugin({
    //   patterns: [{ from: paths.locales, to: paths.buildLocales }]
    // })
  ]

  // if (isDev) {
  //   // plugins.push(new webpack.HotModuleReplacementPlugin({}))
  //   plugins.push(new BundleAnalyzerPlugin({ analyzerMode: analyze }))
  // }

  return plugins
}
