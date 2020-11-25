// @ts-nocheck
const initialState = {
  isSignInOpened: false,
  isSignUpOpened: false,
  isPasswordRecoveryOpened: false,
  isShoppingCartOpened: false,
  isBurgerMenuOpened: false,
}

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_SIGNIN_OPENED':
      return {
        ...state,
        isSignInOpened: true,
      }

    default:
      return state
  }
}

export default modalsReducer
