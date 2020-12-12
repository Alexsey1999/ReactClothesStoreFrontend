import produce from 'immer'

import { SET_CURRENT_CATEGORY } from './actions'

// function loadFromLocalStorage() {
//   try {
//     const serializedState = localStorage.getItem('category')
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
  // currentCategory: persistedState,
  currentCategory: '',
}

const categoriesReducer = produce((draft = initialState, action) => {
  if (action.type === SET_CURRENT_CATEGORY) {
    draft.currentCategory = action.payload
  }
  return draft
})

export default categoriesReducer
