// Libs
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './rootReducer'

// Redux-saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/index'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

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
