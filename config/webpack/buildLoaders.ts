import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { Mode } from './types/config'

export const buildLoaders = (mode: Mode): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const pngLoader = {
    test: /\.(png|jpg|gif)$/i,
    type: 'asset/resource'
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
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

  return [typescriptLoader, scssLoader, svgLoader, pngLoader]
}
