import produce from 'immer'

import { FETCH_GOODS } from './actions'

const initialState = {
  fetchedGoods: [],
}

const goodsReducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case FETCH_GOODS:
      draft.fetchedGoods = action.payload
      break
    default:
      return draft
  }
})

export default goodsReducer
