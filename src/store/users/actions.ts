import {
  IAccountPersonDataSettings,
  IAccountPersonDeliverySettings,
} from '../../interfaces/account'
import { IUser } from './../../interfaces/user'

import {
  SET_JWT,
  REMOVE_JWT,
  SET_USER,
  REMOVE_USER,
  UPDATE_PERSON_DATA,
  UPDATE_PERSON_DELIVERY_DATA,
  SET_LOGIN_TOKEN,
  REMOVE_LOGIN_TOKEN,
  UserActionTypes,
} from './types'

export const setJwt = (payload: string): UserActionTypes => ({
  type: SET_JWT,
  payload,
})

export const removeJwt = (): UserActionTypes => ({
  type: REMOVE_JWT,
})

export const setLoginToken = (payload: string): UserActionTypes => ({
  type: SET_LOGIN_TOKEN,
  payload,
})

export const removeLoginToken = (): UserActionTypes => ({
  type: REMOVE_LOGIN_TOKEN,
})

export const setUser = (payload: IUser): UserActionTypes => ({
  type: SET_USER,
  payload,
})

export const removeUser = (): UserActionTypes => ({
  type: REMOVE_USER,
})

export const updatePersonData = (
  payload: IAccountPersonDataSettings
): UserActionTypes => ({
  type: UPDATE_PERSON_DATA,
  payload,
})

export const updatePersonDeliveryData = (
  payload: IAccountPersonDeliverySettings
): UserActionTypes => ({
  type: UPDATE_PERSON_DELIVERY_DATA,
  payload,
})
