import { ReducersMapObject } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'
import { StoreProvider } from 'app/providers/store-provider'
import { StoreProps } from 'app/providers/store-provider/types/Schema'

export const StoreDecorator =
  (store: StoreProps, asyncReducers: ReducersMapObject<StoreProps>) =>
    (Story: Story) =>
      (
      <StoreProvider initialState={store} asyncReducers={asyncReducers}>
        <Story />
      </StoreProvider>
      )
