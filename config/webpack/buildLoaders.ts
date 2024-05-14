import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { Mode } from './types'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export const buildLoaders = (mode: Mode): webpack.RuleSetRule[] => {
  const babelLoaderTsx = buildBabelLoader({
    isDev: mode === 'development',
    isTsx: true
  })
  const babelLoader = buildBabelLoader({
    isDev: mode === 'development',
    isTsx: false
  })

  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: [
  //     {
  //       loader: 'ts-loader',
  //       options: {
  //         transpileOnly: true,
  //         experimentalWatchApi: true
  //       }
  //     }
  //   ],
  //   exclude: /node_modules/
  // }

  const pngLoader = {
    exclude: /node_modules/,
    test: /\.(png|jpg|gif)$/i,
    type: 'asset/resource'
  }

  const svgLoader = {
    test: /\.svg$/i,
    exclude: /node_modules/,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  }

  const scssLoader = {
    test: /\.(sa|sc|c)ss$/,
    use: [
      mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (path: string) => Boolean(path.includes('.module.')),
            localIdentName: mode
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  }

  return [babelLoaderTsx, babelLoader, scssLoader, svgLoader, pngLoader]
}
