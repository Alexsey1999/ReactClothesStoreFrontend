import produce from 'immer'

import { SET_CURRENT_CATEGORY } from './actions'

const initialState = {
  currentCategory: '',
}

const categoriesReducer = produce((draft = initialState, action) => {
  if (action.type === SET_CURRENT_CATEGORY) {
    draft.currentCategory = action.payload
  }
  return draft
})

export default categoriesReducer
