// Libs
import { createStore, combineReducers } from 'redux'

// Reducers
import modalsReducer from './modals/reducers'

// Root reducer
const rootReducer = combineReducers({
  modals: modalsReducer,
})

// Store
const store = createStore(rootReducer)

export default store
