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

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// Root reducer
const rootReducer = combineReducers({
  modals: modalsReducer,
  goods: goodsReducer,
  categories: categoriesReducer,
})

// Store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
