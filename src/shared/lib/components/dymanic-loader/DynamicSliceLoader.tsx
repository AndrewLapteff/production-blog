import { Reducer } from '@reduxjs/toolkit'
import { PropsWithChildren, useEffect } from 'react'
import { useStore } from 'react-redux'
import {
  ExtendedStore,
  StoreProps
} from 'app/providers/store-provider/types/Schema'

// TODO: array of reducers

interface DynamicSliceLoaderProps extends PropsWithChildren {
  name: keyof StoreProps
  reducer: Reducer
  removeAfterUnmount: boolean
}

export const DynamicSliceLoader = (props: DynamicSliceLoaderProps) => {
  const store = useStore() as ExtendedStore
  const { name, reducer, removeAfterUnmount, children } = props

  useEffect(() => {
    store.reducerManager.add(name, reducer)
    return () => {
      if (removeAfterUnmount) {
        store.reducerManager.remove(name)
      }
    }
  }, [])

  return children
}
