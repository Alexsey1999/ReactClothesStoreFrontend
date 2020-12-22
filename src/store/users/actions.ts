// @ts-nocheck
export const SET_JWT = 'SET_JWT'
export const REMOVE_JWT = 'REMOVE_JWT'
export const SET_USER = 'SET_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const SET_LOGIN_TOKEN = 'SET_LOGIN_TOKEN'
export const REMOVE_LOGIN_TOKEN = 'REMOVE_LOGIN_TOKEN'
export const UPDATE_USER = 'UPDATE_USER'

export const setJwt = (payload: string) => ({
  type: SET_JWT,
  payload,
})

export const removeJwt = () => ({
  type: REMOVE_JWT,
})

export const setLoginToken = (payload: string) => ({
  type: SET_LOGIN_TOKEN,
  payload,
})

export const removeLoginToken = () => ({
  type: REMOVE_LOGIN_TOKEN,
})

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
})

export const removeUser = () => ({
  type: REMOVE_USER,
})

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload,
})
