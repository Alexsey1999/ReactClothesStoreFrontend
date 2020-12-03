// @ts-nocheck
export const OPEN_SHOPPING_CART = 'OPEN_SHOPPING_CART'

export const CLOSE_SHOPPING_CART = 'CLOSE_SHOPPING_CART'

export const setIsSignInOpened = (payload: any) => ({
  type: 'SET_IS_SIGNIN_OPENED',
  payload,
})

export const openShoppingCart = (payload) => ({
  type: OPEN_SHOPPING_CART,
  payload,
})

export const closeShoppingCart = (payload) => ({
  type: CLOSE_SHOPPING_CART,
  payload,
})
