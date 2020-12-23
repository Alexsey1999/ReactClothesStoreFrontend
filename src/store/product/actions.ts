export const SET_PRODUCT_ITEM = 'SET_PRODUCT_ITEM'
export const REMOVE_PRODUCT_ITEM = 'REMOVE_PRODUCT_ITEM'
export const PRODUCT_ITEM_REQUEST = 'PRODUCT_ITEM_REQUEST'
export const SET_PRODUCT_SIZE = 'SET_PRODUCT_SIZE'
export const SET_PRODUCT_QUANTITY = 'SET_PRODUCT_QUANTITY'

export const setProductItem = (payload: any) => ({
  type: SET_PRODUCT_ITEM,
  payload,
})

export const setProductSize = (payload: any) => ({
  type: SET_PRODUCT_SIZE,
  payload,
})

export const setProductQuantity = (payload: any) => ({
  type: SET_PRODUCT_QUANTITY,
  payload,
})

export const removeProductItem = () => ({
  type: REMOVE_PRODUCT_ITEM,
})
