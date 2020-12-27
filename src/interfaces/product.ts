export interface IProductItem {
  _id?: string
  swiperImages?: string[]
  description?: IProductDescription[]
  sizes?: IProductSize[]
  name: string
  price: number
  imageUrl?: string
  category: string
  isBlack?: boolean
  isWhite?: boolean
  deliveryInfo: string
  sizeAndCare?: ISizeAndCare
  delivery?: number
}

export interface IProductSize {
  size?: string
  extraPrice?: number
}

export interface IProductDescription {
  p?: string[]
  ulTitle?: string
  li?: string[]
}

export interface ISizeAndCare {
  size: ISize[]
  care: ICare[]
}

export interface ISize {
  p?: string[]
  img?: string
  table?: {
    th: string[]
    tr: [string[]]
  }
  em?: string
}

export interface ICare {
  h4?: string
  p?: string
}
