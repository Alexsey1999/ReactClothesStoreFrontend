import { IProductItem } from './product'

export interface IOrderItem {
  item: IProductItem
  quantity: number
  price: number
  delivery: number
  size?: string
  sizePrice: number
}

export interface IOrder {
  items: IOrderItem[]
  _id: string
  totalPrice: number
  purePrice: number
  deliveryPrice: number
  country: string
  area: string
  address: string
  mailindex: string
  personName: string
  phone: string
  ordertoken: string
}
