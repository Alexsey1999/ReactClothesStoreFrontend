import { IProductItem } from './product'

export interface ICart {
  items: ICartItem[]
  purePrice: number
  deliveryPrice: number
  totalQuantity: number
  totalPrice: number
}

export interface ICartItem {
  item: IProductItem
  quantity: number
  price: number
  delivery: number
  size?: string
  sizePrice: number
}
