import { IProductItem } from './../../interfaces/product'
import { FETCH_GOODS } from './types'
import { GoodsActionTypes } from './types'

export const setFetchedGoods = (payload: IProductItem[]): GoodsActionTypes => ({
  type: FETCH_GOODS,
  payload,
})
