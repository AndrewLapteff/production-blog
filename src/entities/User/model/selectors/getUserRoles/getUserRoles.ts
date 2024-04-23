import { createSelector } from '@reduxjs/toolkit'
import { StoreProps } from 'app/providers/store-provider/types/Schema'

export const getUserRoles = (state: StoreProps) =>
  state?.userReducer?.user?.roles || []

export const isUserAdmin = createSelector(getUserRoles, (user) =>
  // @ts-expect-error
  Boolean(user?.includes('ADMIN'))
)

export const isUserManager = createSelector(getUserRoles, (user) =>
  // @ts-expect-error
  Boolean(user?.includes('MANAGER'))
)
