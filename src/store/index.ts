// Libs
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// Redux-saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/index'

// Reducers
import modalsReducer from './modals/reducers'
import goodsReducer from './goods/reducers'
import categoriesReducer from './categories/reducers'
import productReducer from './product/reducers'
import usersReducer from './users/reducers'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// Root reducer
const rootReducer = combineReducers({
  modals: modalsReducer,
  goods: goodsReducer,
  categories: categoriesReducer,
  product: productReducer,
  users: usersReducer,
})

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
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

store.subscribe(() => saveToLocalStorage(store.getState()))

sagaMiddleware.run(rootSaga)

export default store
