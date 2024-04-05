/* eslint-disable @typescript-eslint/no-dynamic-delete */
import {
  Action,
  Reducer,
  ReducersMapObject,
  combineReducers
} from '@reduxjs/toolkit'
import { ReducerManager, ReducersNames, StoreProps } from '../types/Schema'

export function createReducerManager(
  initialReducers: ReducersMapObject<StoreProps>
): ReducerManager {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: ReducersNames[] = []

  return {
    getReducerMap: () => reducers,

    // reducer of reducers basically
    // @ts-expect-error
    reduce: (state: StoreProps, action: Action) => {
      // If any reducers have been removed, clean up their state first
      if (keysToRemove.length > 0) {
        state = { ...state }
        for (const key of keysToRemove) {
          delete state[key]
        }
        keysToRemove = []
      }
      // @ts-expect-error
      return combinedReducer(state, action) // a brand new reducer without extra reducers
    },
    add: (key: ReducersNames, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }
      reducers[key] = reducer
      combinedReducer = combineReducers(reducers)
    },
    remove: (key: ReducersNames) => {
      if (!key || !reducers[key]) {
        return
      }
      delete reducers[key]
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
    }
  }
}
