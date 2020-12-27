import { ICart } from './../../interfaces/cart'
import { CartActionTypes } from './types'

import { SET_CART, SET_SIZE, REDUCE_ITEM, INCREASE_ITEM } from './types'

export const setCart = (payload: ICart): CartActionTypes => ({
  type: SET_CART,
  payload,
})

export const removeItem = (payload: ICart): CartActionTypes => ({
  type: SET_CART,
  payload,
})

export const reduceItem = (payload: ICart): CartActionTypes => ({
  type: REDUCE_ITEM,
  payload,
})

export const increaseItem = (payload: ICart): CartActionTypes => ({
  type: INCREASE_ITEM,
  payload,
})

export const setSize = (payload: ICart): CartActionTypes => ({
  type: SET_SIZE,
  payload,
})
