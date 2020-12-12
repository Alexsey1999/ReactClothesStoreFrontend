// @ts-nocheck
// Libs
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Redux-saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/index'

// Reducers
import modalsReducer from './modals/reducers'
import goodsReducer from './goods/reducers'
import categoriesReducer from './categories/reducers'
import productReducer from './product/reducers'
import usersReducer from './users/reducers'
import cartReducer from './cart/reducers'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// Root reducer
const rootReducer = combineReducers({
  modals: modalsReducer,
  goods: goodsReducer,
  categories: categoriesReducer,
  product: productReducer,
  users: usersReducer,
  cart: cartReducer,
})

// rootReducer = persistReducer(persistConfig, rootReducer)

const persistRootReducer = persistReducer(persistConfig, rootReducer)

function saveToLocalStorage(state: any) {
  if (Object.keys(state.product.product).length) {
    const serializedState = JSON.stringify(state.product.product)
    localStorage.setItem('product', serializedState)
    try {
    } catch (error) {
      console.log(error)
    }
  }
}

// Store
export const store = createStore(
  persistRootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

export const persistor = persistStore(store)

store.subscribe(() => saveToLocalStorage(store.getState()))

sagaMiddleware.run(rootSaga)
