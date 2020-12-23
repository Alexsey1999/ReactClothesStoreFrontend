import produce from 'immer'

import {
  SET_PRODUCT_ITEM,
  SET_PRODUCT_SIZE,
  SET_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_ITEM,
} from './actions'

// function loadFromLocalStorage() {
//   try {
//     const serializedState = localStorage.getItem('product')
//     if (serializedState === null) {
//       return {}
//     }
//     return JSON.parse(serializedState)
//   } catch (error) {
//     console.log(error)
//     return undefined
//   }
// }

// const persistedState = loadFromLocalStorage()

const initialState = {
  product: {},
  productSize: { sizeIndex: 0, size: 'XS' },
  productQuantity: 1,
  // isFetchedProduct: false
}

const productReducer = produce((draft = initialState, action) => {
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
})

export default productReducer
