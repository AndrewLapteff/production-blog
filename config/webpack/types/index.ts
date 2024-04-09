export type Mode = 'production' | 'development'

export interface Paths {
  src: string
  entry: string
  build: string
  html: string
  locales: string
  buildLocales: string
}

export interface BuildEnv {
  mode: Mode
  apiUrl: string
  analyze: 'server' | 'disabled'
}

export interface BuildOptions extends BuildEnv {
  paths: Paths
}
