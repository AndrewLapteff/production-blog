import { StoreProps } from 'app/providers/store-provider'

export const getAuthor = (store: StoreProps) => store?.articleReducer?.author
