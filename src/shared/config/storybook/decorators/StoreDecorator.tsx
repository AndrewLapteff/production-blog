import { ReducersMapObject } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'
import { StoreProvider } from 'app/providers/store-provider'
import { StoreProps } from 'app/providers/store-provider/types/Schema'
import { userReducer } from 'entities/User/model/slice/userSlice'
import { scrollRestorationSliceReducer } from 'features/scroll-restoration/model/slice/scrollRestorationSlice'

export const StoreDecorator =
  (
    store: StoreProps,
    asyncReducers: ReducersMapObject<StoreProps> = {
      scrollRestorationSliceReducer,
      userReducer
    }
  ) =>
  (Story: Story) =>
    (
      <StoreProvider initialState={store} asyncReducers={asyncReducers}>
        <Story />
      </StoreProvider>
    )
