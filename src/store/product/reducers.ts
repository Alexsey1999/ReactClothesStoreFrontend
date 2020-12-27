import { IProductItem, IProductSize } from './../../interfaces/product'
import produce from 'immer'

import { ProductActionTypes } from './types'

import {
  SET_PRODUCT_ITEM,
  SET_PRODUCT_SIZE,
  SET_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_ITEM,
} from './types'

interface IProductState {
  product: object
  productSize: { sizeIndex: number; size: string }
  productQuantity: number
}

const initialState: IProductState = {
  product: {},
  productSize: { sizeIndex: 0, size: 'XS' },
  productQuantity: 1,
}

const productReducer = produce(
  (draft = initialState, action: ProductActionTypes) => {
    switch (action.type) {
      case SET_PRODUCT_ITEM:
        draft.product = action.payload
        break
      case SET_PRODUCT_SIZE:
        draft.productSize = action.payload
        break
      case SET_PRODUCT_QUANTITY:
        draft.productQuantity = action.payload
        break
      case REMOVE_PRODUCT_ITEM:
        draft.product = {}
        break
      default:
        return draft
    }
  }
)

export default productReducer
