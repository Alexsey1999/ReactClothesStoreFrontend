// @ts-nocheck
import produce from 'immer'
import {
  SET_JWT,
  REMOVE_JWT,
  SET_USER,
  REMOVE_USER,
  SET_LOGIN_TOKEN,
  REMOVE_LOGIN_TOKEN,
} from './actions'

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('jwt')
    if (serializedState === null) {
      return ''
    }
    return serializedState
  } catch (error) {
    console.log(error)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()

const initialState = {
  user: null,
  jwt: persistedState,
  loginToken: null,
}

const usersReducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case SET_JWT:
      draft.jwt = action.payload
      break
    case REMOVE_JWT:
      draft.jwt = null
      break
    case SET_LOGIN_TOKEN:
      draft.loginToken = action.payload
      break
    case REMOVE_LOGIN_TOKEN:
      draft.loginToken = null
      break
    case SET_USER:
      draft.user = action.payload
      break
    case REMOVE_USER:
      draft.user = {}
      break
    default:
      return draft
  }
})

export default usersReducer
