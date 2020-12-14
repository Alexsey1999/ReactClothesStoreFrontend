import produce from 'immer'

import {
  SET_CART,
  REMOVE_ITEM,
  REDUCE_ITEM,
  INCREASE_ITEM,
  SET_SIZE,
} from './actions'

const initialState = {
  cart: {},
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
