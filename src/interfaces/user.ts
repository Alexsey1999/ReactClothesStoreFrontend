import { ICartItem } from './cart'

export interface IUser {
  _id?: string
  email?: string
  orders: IUserOrder[]
  name?: string
  surname?: string
  thirdname?: string
  phone?: string
  country?: string
  city?: string
  area?: string
  address?: string
  mailindex?: string
  resetPasswordExpires?: string
  resetPasswordToken?: string
}

export interface IUserOrder {
  _id: string
  items: ICartItem[]
  totalPrice: number
  purePrice: number
  deliveryPrice: number
  country: string
  area: string
  address: string
  personName: string
  phone: string
  ordertoken: string
}
