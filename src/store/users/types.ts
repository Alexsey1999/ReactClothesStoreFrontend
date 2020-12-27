import {
  IAccountPersonDataSettings,
  IAccountPersonDeliverySettings,
} from './../../interfaces/account'
import { IUser } from './../../interfaces/user'

export const SET_JWT = 'SET_JWT'
export const REMOVE_JWT = 'REMOVE_JWT'

export const SET_USER = 'SET_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const UPDATE_PERSON_DATA = 'UPDATE_PERSON_DATA'
export const UPDATE_PERSON_DELIVERY_DATA = 'UPDATE_PERSON_DELIVERY_DATA'

export const SET_LOGIN_TOKEN = 'SET_LOGIN_TOKEN'
export const REMOVE_LOGIN_TOKEN = 'REMOVE_LOGIN_TOKEN'

export interface IUserState {
  user: IUser
  jwt: string | undefined
  loginToken: string | null
}

interface ISetJwt {
  type: typeof SET_JWT
  payload: string
}

interface IRemoveJwt {
  type: typeof REMOVE_JWT
}

interface ISetLoginToken {
  type: typeof SET_LOGIN_TOKEN
  payload: string
}

interface IRemoveLoginToken {
  type: typeof REMOVE_LOGIN_TOKEN
}

interface ISetUser {
  type: typeof SET_USER
  payload: IUser
}

interface IRemoveUser {
  type: typeof REMOVE_USER
}

interface IUpdatePersonData {
  type: typeof UPDATE_PERSON_DATA
  payload: IAccountPersonDataSettings
}

interface IUpdatePersonDeliveryData {
  type: typeof UPDATE_PERSON_DELIVERY_DATA
  payload: IAccountPersonDeliverySettings
}

export type UserActionTypes =
  | ISetJwt
  | IRemoveJwt
  | ISetLoginToken
  | IRemoveLoginToken
  | ISetUser
  | IRemoveUser
  | IUpdatePersonData
  | IUpdatePersonDeliveryData
