// Корзина сайдбар
export const OPEN_SHOPPING_CART = 'OPEN_SHOPPING_CART'
export const CLOSE_SHOPPING_CART = 'CLOSE_SHOPPING_CART'

// Бургер меню
export const OPEN_BURGER_MENU = 'OPEN_BURGER_MENU'
export const CLOSE_BURGER_MENU = 'CLOSE_BURGER_MENU'

// Модальные окна
// Спасибо за регистрацию
export const OPEN_SUCCESS_SIGNUP = 'OPEN_SUCCESS_SIGNUP'
export const CLOSE_SUCCESS_SIGNUP = 'CLOSE_SUCCESS_SIGNUP'

// Авторизация
export const OPEN_SIGNIN = 'OPEN_SIGNIN'
export const CLOSE_SIGNIN = 'CLOSE_SIGNIN'

// Регистрация
export const OPEN_SIGNUP = 'OPEN_SIGNUP'
export const CLOSE_SIGNUP = 'CLOSE_SIGNUP'

// Восстановление пароля
export const OPEN_PASSWORD_RECOVERY = 'OPEN_PASSWORD_RECOVERY'
export const CLOSE_PASSWORD_RECOVERY = 'CLOSE_PASSWORD_RECOVERY'

// ----------Корзина сайдбар----------
interface IOpenShoppingCart {
  type: typeof OPEN_SHOPPING_CART
}

interface ICloseShoppingCart {
  type: typeof CLOSE_SHOPPING_CART
}
// ----------Корзина сайдбар---------

// ----------Бургер меню----------
interface IOpenBurgerMenu {
  type: typeof OPEN_BURGER_MENU
}

interface ICloseBurgerMenu {
  type: typeof CLOSE_BURGER_MENU
}
// ----------Бургер меню----------

// ----------Спасибо за регистрацию---------
interface IOpenSuccessSignUp {
  type: typeof OPEN_SUCCESS_SIGNUP
}

interface ICloseSuccessSignUp {
  type: typeof CLOSE_SUCCESS_SIGNUP
}
// ----------Спасибо за регистрацию---------

// ----------Авторизация---------
interface IOpenSignIn {
  type: typeof OPEN_SIGNIN
}

interface ICloseSignIn {
  type: typeof CLOSE_SIGNIN
}
// ----------Авторизация---------

// ----------Регистрация---------
interface IOpenSignUp {
  type: typeof OPEN_SIGNUP
}

interface ICloseSignUp {
  type: typeof CLOSE_SIGNUP
}
// ----------Регистрация---------

// ----------Восстановление пароля---------
interface IOpenPasswordRecovery {
  type: typeof OPEN_PASSWORD_RECOVERY
}

interface IClosePasswordRecovery {
  type: typeof CLOSE_PASSWORD_RECOVERY
}
// ----------Восстановление пароля---------

export type ModalsActionTypes =
  | IOpenShoppingCart
  | ICloseShoppingCart
  | IOpenBurgerMenu
  | ICloseBurgerMenu
  | IOpenSuccessSignUp
  | ICloseSuccessSignUp
  | IOpenSignIn
  | ICloseSignIn
  | IOpenSignUp
  | ICloseSignUp
  | IOpenPasswordRecovery
  | IClosePasswordRecovery
