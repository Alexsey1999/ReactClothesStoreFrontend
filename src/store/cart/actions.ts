// @ts-nocheck
export const SET_CART = 'SET_CART'
export const SET_SIZE = 'SET_SIZE'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const REDUCE_ITEM = 'REDUCE_ITEM'
export const INCREASE_ITEM = 'INCREASE_ITEM'

export const setCart = (payload) => ({
  type: SET_CART,
  payload,
})

export const removeItem = (payload) => ({
  type: SET_CART,
  payload,
})

export const reduceItem = (payload) => ({
  type: REDUCE_ITEM,
  payload,
})

export const increaseItem = (payload) => ({
  type: INCREASE_ITEM,
  payload,
})

export const setSize = (payload) => ({
  type: SET_SIZE,
  payload,
})
