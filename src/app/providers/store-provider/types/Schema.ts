import { UserSchema } from 'entities/User'

interface CounterShema {
  value: number
}

export interface StoreProps {
  counter: CounterShema
  userReducer: UserSchema
}
