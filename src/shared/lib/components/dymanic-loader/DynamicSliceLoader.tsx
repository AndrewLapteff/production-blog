import { Reducer } from '@reduxjs/toolkit'
import { PropsWithChildren, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import {
  ExtendedStore,
  StoreProps
} from 'app/providers/store-provider/types/Schema'

// TODO: array of reducers

interface DynamicSliceLoaderProps extends PropsWithChildren {
  name: keyof StoreProps | Array<keyof StoreProps>
  reducer: Reducer | Reducer[]
  removeAfterUnmount: boolean
}

export const DynamicSliceLoader = (props: DynamicSliceLoaderProps) => {
  const store = useStore() as ExtendedStore
  const { name, reducer, removeAfterUnmount, children } = props
  const dispatch = useDispatch()

  useEffect(() => {
    if (!Array.isArray(reducer) && !Array.isArray(name)) {
      store.reducerManager.add(name, reducer)
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
  })

  return children
}
