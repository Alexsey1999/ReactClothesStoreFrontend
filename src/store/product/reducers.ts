import produce from 'immer'

import { SET_PRODUCT_ITEM } from './actions'

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('product')
    if (serializedState === null) {
      return {}
    }
    return JSON.parse(serializedState)
  } catch (error) {
    console.log(error)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

const initialState = {
  product: persistedState,
}

const productReducer = produce((draft = initialState, action) => {
  if (action.type === SET_PRODUCT_ITEM) {
    draft.product = action.payload
  }
  return draft
})

export default productReducer
