// @ts-nocheck
import produce from 'immer'
import {
  OPEN_SHOPPING_CART,
  CLOSE_SHOPPING_CART,
  OPEN_SUCCESS_SIGNUP,
  CLOSE_SUCCESS_SIGNUP,
  OPEN_SIGNIN,
  CLOSE_SIGNIN,
  OPEN_SIGNUP,
  CLOSE_SIGNUP,
  OPEN_PASSWORD_RECOVERY,
  CLOSE_PASSWORD_RECOVERY,
  OPEN_BURGER_MENU,
  CLOSE_BURGER_MENU,
} from './actions'

const initialState = {
  isSignInOpened: false,
  isSignUpOpened: false,
  isPasswordRecoveryOpened: false,
  isShoppingCartOpened: false,
  isBurgerMenuOpened: false,
  isSuccessSignUpOpened: false,
}

const modalsReducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case OPEN_SHOPPING_CART:
      draft.isShoppingCartOpened = true
      break
    case CLOSE_SHOPPING_CART:
      draft.isShoppingCartOpened = false
      break
    case OPEN_BURGER_MENU:
      draft.isBurgerMenuOpened = true
      break
    case CLOSE_BURGER_MENU:
      draft.isBurgerMenuOpened = false
      break
    case OPEN_SUCCESS_SIGNUP:
      draft.isSuccessSignUpOpened = true
      break
    case CLOSE_SUCCESS_SIGNUP:
      draft.isSuccessSignUpOpened = false
      break
    case OPEN_SIGNIN:
      draft.isSignInOpened = true
      draft.isSignUpOpened = false
      draft.isPasswordRecoveryOpened = false
      break
    case CLOSE_SIGNIN:
      draft.isSignInOpened = false
      break
    case OPEN_SIGNUP:
      draft.isSignInOpened = false
      draft.isSignUpOpened = true
      break
    case CLOSE_SIGNUP:
      draft.isSignUpOpened = false
      break
    case OPEN_PASSWORD_RECOVERY:
      draft.isPasswordRecoveryOpened = true
      draft.isSignInOpened = false
      break
    case CLOSE_PASSWORD_RECOVERY:
      draft.isPasswordRecoveryOpened = false
      break
    default:
      return draft
  }
})

export default modalsReducer
