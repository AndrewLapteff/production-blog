declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.png'

declare const IS_DEV: boolean
declare const API_URL: string
declare const PROJECT_ENV: 'frontend' | 'storybook' | 'jest'

type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T
}
type List = PartialRecord<'a' | 'b' | 'c', string>

type Dictionary = Record<string, string>
// env: (key: string) => string
declare namespace Cypress {
  interface Chainable {
    login: (email: string, password: string) => Chainable<any>
    getByTestId: (id: string) => Chainable<any>
  }
}
