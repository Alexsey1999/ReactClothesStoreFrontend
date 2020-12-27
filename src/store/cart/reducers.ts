import { ICart } from './../../interfaces/cart'
import produce from 'immer'
import { CartActionTypes } from './types'
import { SET_CART, REDUCE_ITEM, INCREASE_ITEM, SET_SIZE } from './types'

interface ICartState {
  cart: ICart
}

const initialState: ICartState = {
  cart: {
    items: [],
    purePrice: 0,
    deliveryPrice: 0,
    totalQuantity: 0,
    totalPrice: 0,
  },
}

const cartReducer = produce((draft = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case SET_CART:
      draft.cart = action.payload
      break
    case REDUCE_ITEM:
      draft.cart = action.payload
      break
    case INCREASE_ITEM:
      draft.cart = action.payload
      break
    case SET_SIZE:
      draft.cart = action.payload
      break
    default:
      return draft
  }
})

export default cartReducer
