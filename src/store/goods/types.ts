import { IProductItem } from './../../interfaces/product'

export const FETCH_GOODS = 'FETCH_GOODS'
export const FETCH_GOODS_REQUEST = 'FETCH_GOODS_REQUEST'

interface ISetFetchedGoods {
  type: typeof FETCH_GOODS
  payload: IProductItem[]
}

export type GoodsActionTypes = ISetFetchedGoods
