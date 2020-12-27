import { IProductItem, IProductSize } from './../../interfaces/product'
import { ProductActionTypes } from './types'
import {
  SET_PRODUCT_ITEM,
  SET_PRODUCT_SIZE,
  SET_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_ITEM,
} from './types'

export const setProductItem = (payload: IProductItem): ProductActionTypes => ({
  type: SET_PRODUCT_ITEM,
  payload,
})

export const setProductSize = (payload: IProductSize): ProductActionTypes => ({
  type: SET_PRODUCT_SIZE,
  payload,
})

export const setProductQuantity = (payload: number): ProductActionTypes => ({
  type: SET_PRODUCT_QUANTITY,
  payload,
})

export const removeProductItem = (): ProductActionTypes => ({
  type: REMOVE_PRODUCT_ITEM,
})
