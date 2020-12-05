// @ts-nocheck

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
export const openShoppingCart = () => ({
  type: OPEN_SHOPPING_CART,
})

export const closeShoppingCart = () => ({
  type: CLOSE_SHOPPING_CART,
})
// ----------Корзина сайдбар---------

// ----------Бургер меню----------
export const openBurgerMenu = () => ({
  type: OPEN_BURGER_MENU,
})

export const closeBurgerMenu = () => ({
  type: CLOSE_BURGER_MENU,
})
// ----------Бургер меню----------

// ----------Спасибо за регистрацию---------
export const openSuccessSignUp = () => ({
  type: OPEN_SUCCESS_SIGNUP,
})

export const closeSuccessSignUp = () => ({
  type: CLOSE_SUCCESS_SIGNUP,
})
// ----------Спасибо за регистрацию---------

// ----------Авторизация---------
export const openSignIn = () => ({
  type: 'OPEN_SIGNIN',
})

export const closeSignIn = () => ({
  type: 'CLOSE_SIGNIN',
})
// ----------Авторизация---------

// ----------Регистрация---------
export const openSignUp = () => ({
  type: OPEN_SIGNUP,
})

export const closeSignUp = () => ({
  type: CLOSE_SIGNUP,
})
// ----------Регистрация---------

// ----------Восстановление пароля---------
export const openPasswordRecovery = () => ({
  type: OPEN_PASSWORD_RECOVERY,
})

export const closePasswordRecovery = () => ({
  type: CLOSE_PASSWORD_RECOVERY,
})
// ----------Восстановление пароля---------
