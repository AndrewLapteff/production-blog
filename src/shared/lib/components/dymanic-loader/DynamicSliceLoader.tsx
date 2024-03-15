import { Reducer } from '@reduxjs/toolkit'
import { PropsWithChildren, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import {
  ExtendedStore,
  StoreProps
} from 'app/providers/store-provider/types/Schema'

interface DynamicSliceLoaderProps extends PropsWithChildren {
  name: keyof StoreProps | Array<keyof StoreProps>
  reducer: Reducer | Reducer[]
  removeAfterUnmount?: boolean
}

export const DynamicSliceLoader = (props: DynamicSliceLoaderProps) => {
  const store = useStore() as ExtendedStore
  const { name, reducer, removeAfterUnmount = true, children } = props
  const dispatch = useDispatch()

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()
    const reducers = Object.keys(mountedReducers)

    if (!Array.isArray(reducer) && !Array.isArray(name)) {
      let isMounted: boolean = false

      for (const mountedReducer of reducers) {
        if (mountedReducer === name) {
          isMounted = true
        }
      }

      if (!isMounted) {
        store.reducerManager.add(name, reducer)
      }
    } else if (Array.isArray(reducer) && Array.isArray(name)) {
      reducer.forEach((reducerItem, i) => {
        store.reducerManager.add(name[i], reducerItem)
        dispatch({ type: `@INIT ${name[i]} reducer` })
      })
    }

    return () => {
      if (removeAfterUnmount) {
        if (!Array.isArray(reducer) && !Array.isArray(name)) {
          store.reducerManager.remove(name)
        } else if (Array.isArray(reducer) && Array.isArray(name)) {
          name.forEach((nameItem) => {
            store.reducerManager.remove(nameItem)
          })
        }
      }
    }
  }, [])

  return children
}
