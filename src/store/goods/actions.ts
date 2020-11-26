export const FETCH_GOODS = 'FETCH_GOODS'
export const FETCH_GOODS_REQUEST = 'FETCH_GOODS_REQUEST'

export const setFetchedGoods = (payload: any) => ({
  type: FETCH_GOODS,
  payload,
})
