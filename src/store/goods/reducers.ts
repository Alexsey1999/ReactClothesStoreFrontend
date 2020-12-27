import { IProductItem } from './../../interfaces/product'
import { GoodsActionTypes } from './types'
import produce from 'immer'
import { FETCH_GOODS } from './types'

interface IGoodsState {
  fetchedGoods: IProductItem[]
}

const initialState: IGoodsState = {
  fetchedGoods: [],
}

const goodsReducer = produce(
  (draft = initialState, action: GoodsActionTypes) => {
    switch (action.type) {
      case FETCH_GOODS:
        draft.fetchedGoods = action.payload
        break
      default:
        return draft
    }
  }
)

export default goodsReducer
