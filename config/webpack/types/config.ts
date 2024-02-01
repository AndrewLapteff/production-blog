export type Mode = 'production' | 'development'

interface Paths {
  src: string
  entry: string
  build: string
  html: string
}

export interface BuildOptions {
  mode: Mode
  paths: Paths
}

export interface BuildEnv {
  mode: Mode
}