import { createSelector } from '@reduxjs/toolkit'
import { StoreProps } from 'app/providers/store-provider'

export const getScroll = (store: StoreProps) =>
  store.scrollRestorationSliceReducer

export const getScrollValue = createSelector(
  getScroll,
  (state, path: string) => path,
  (scroll, path) => scroll[path] || 0
)
