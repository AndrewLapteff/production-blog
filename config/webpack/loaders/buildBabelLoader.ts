import removeJSXAttributes from '../plugins/removeJSXAttributes'

interface BuildBabelLoaderProps {
  isDev: boolean
  isTsx: boolean
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps) {
  return {
    test: isTsx ? /\.(tsx|jsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          // [
          //   'i18next-extract',
          //   {
          //     locales: ['en', 'ru'],
          //     keyAsDefaultValue: true
          //   }
          // ],
          [
            '@babel/plugin-transform-typescript',
            {
              isTSX: isTsx
            }
          ],
          '@babel/plugin-transform-runtime',
          isTsx && [
            removeJSXAttributes(),
            {
              props: ['data-testid']
            }
          ]
          // isDev && require.resolve('react-refresh/babel')
        ].filter(Boolean)
      }
    }
  }
}
