import { IProductItem, IProductSize } from './../../interfaces/product'
export const SET_PRODUCT_ITEM = 'SET_PRODUCT_ITEM'
export const REMOVE_PRODUCT_ITEM = 'REMOVE_PRODUCT_ITEM'
export const PRODUCT_ITEM_REQUEST = 'PRODUCT_ITEM_REQUEST'
export const SET_PRODUCT_SIZE = 'SET_PRODUCT_SIZE'
export const SET_PRODUCT_QUANTITY = 'SET_PRODUCT_QUANTITY'

interface ISetProductItem {
  type: typeof SET_PRODUCT_ITEM
  payload: IProductItem
}

interface ISetProductSize {
  type: typeof SET_PRODUCT_SIZE
  payload: IProductSize
}

interface ISetProductQuantity {
  type: typeof SET_PRODUCT_QUANTITY
  payload: number
}

interface IRemoveProductItem {
  type: typeof REMOVE_PRODUCT_ITEM
}

export type ProductActionTypes =
  | ISetProductItem
  | ISetProductSize
  | ISetProductQuantity
  | IRemoveProductItem
