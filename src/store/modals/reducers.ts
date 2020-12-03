// @ts-nocheck
import produce from 'immer'
import { OPEN_SHOPPING_CART, CLOSE_SHOPPING_CART } from './actions'

const initialState = {
  isSignInOpened: false,
  isSignUpOpened: false,
  isPasswordRecoveryOpened: false,
  isShoppingCartOpened: false,
  isBurgerMenuOpened: false,
}

const modalsReducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case OPEN_SHOPPING_CART:
      draft.isShoppingCartOpened = true
      break
    case CLOSE_SHOPPING_CART:
      draft.isShoppingCartOpened = false
      break
    default:
      return draft
  }
})

export default modalsReducer
