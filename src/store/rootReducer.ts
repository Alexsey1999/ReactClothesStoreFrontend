import { combineReducers } from 'redux'

// Reducers
import modalsReducer from './modals/reducers'
import goodsReducer from './goods/reducers'
import productReducer from './product/reducers'
import usersReducer from './users/reducers'
import cartReducer from './cart/reducers'

// Root reducer
const rootReducer = combineReducers({
  modals: modalsReducer,
  goods: goodsReducer,
  product: productReducer,
  users: usersReducer,
  cart: cartReducer,
})

export default rootReducer
