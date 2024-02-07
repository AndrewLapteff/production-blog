export type Mode = 'production' | 'development'

interface Paths {
  src: string
  entry: string
  build: string
  html: string
}

export interface BuildEnv {
  mode: Mode
  analyze: 'server' | 'disabled'
}

export interface BuildOptions extends BuildEnv {
  paths: Paths
}
