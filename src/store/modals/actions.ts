import { ModalsActionTypes } from './types'

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
} from './types'

// ----------Корзина сайдбар----------
export const openShoppingCart = (): ModalsActionTypes => ({
  type: OPEN_SHOPPING_CART,
})

export const closeShoppingCart = (): ModalsActionTypes => ({
  type: CLOSE_SHOPPING_CART,
})
// ----------Корзина сайдбар---------

// ----------Бургер меню----------
export const openBurgerMenu = (): ModalsActionTypes => ({
  type: OPEN_BURGER_MENU,
})

export const closeBurgerMenu = (): ModalsActionTypes => ({
  type: CLOSE_BURGER_MENU,
})
// ----------Бургер меню----------

// ----------Спасибо за регистрацию---------
export const openSuccessSignUp = (): ModalsActionTypes => ({
  type: OPEN_SUCCESS_SIGNUP,
})

export const closeSuccessSignUp = (): ModalsActionTypes => ({
  type: CLOSE_SUCCESS_SIGNUP,
})
// ----------Спасибо за регистрацию---------

// ----------Авторизация---------
export const openSignIn = (): ModalsActionTypes => ({
  type: OPEN_SIGNIN,
})

export const closeSignIn = (): ModalsActionTypes => ({
  type: CLOSE_SIGNIN,
})
// ----------Авторизация---------

// ----------Регистрация---------
export const openSignUp = (): ModalsActionTypes => ({
  type: OPEN_SIGNUP,
})

export const closeSignUp = (): ModalsActionTypes => ({
  type: CLOSE_SIGNUP,
})
// ----------Регистрация---------

// ----------Восстановление пароля---------
export const openPasswordRecovery = (): ModalsActionTypes => ({
  type: OPEN_PASSWORD_RECOVERY,
})

export const closePasswordRecovery = (): ModalsActionTypes => ({
  type: CLOSE_PASSWORD_RECOVERY,
})
// ----------Восстановление пароля---------
