import { ICart } from './../../interfaces/cart'

export const SET_CART = 'SET_CART'
export const SET_SIZE = 'SET_SIZE'
export const REDUCE_ITEM = 'REDUCE_ITEM'
export const INCREASE_ITEM = 'INCREASE_ITEM'

interface ISetCart {
  type: typeof SET_CART
  payload: ICart
}

interface IReduceItem {
  type: typeof REDUCE_ITEM
  payload: ICart
}

interface IIncreaseItem {
  type: typeof INCREASE_ITEM
  payload: ICart
}

interface ISetSize {
  type: typeof SET_SIZE
  payload: ICart
}

export type CartActionTypes = ISetCart | IReduceItem | IIncreaseItem | ISetSize
