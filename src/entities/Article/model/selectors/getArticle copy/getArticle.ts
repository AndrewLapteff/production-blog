import { StoreProps } from 'app/providers/store-provider'

export const getArticle = (store: StoreProps) => store?.articleReducer?.article
