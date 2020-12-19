import produce from 'immer'

import {
  SET_CART,
  REMOVE_ITEM,
  REDUCE_ITEM,
  INCREASE_ITEM,
  SET_SIZE,
} from './actions'

const initialState = {
  cart: {
    items: [],
    purePrice: 0,
    deliveryPrice: 0,
    totalQuantity: 0,
    totalPrice: 0,
  },
}

const cartReducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      draft.cart = action.payload
      break
    case REMOVE_ITEM:
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
