// Libs
import React from 'react'

// Styles
import './BookingProduct.scss'

interface IBookingProductProps {
  name: string
  size: string
  quantity: number
  price: number
}

const BookingProduct: React.FC<IBookingProductProps> = ({
  name,
  size,
  quantity,
  price,
}) => {
  return (
    <div className="booking-order-product">
      <div className="booking-order-product-title">{name}</div>

      {size && (
        <div className="booking-order-product-size">
          Размер: <span>{size}</span>
        </div>
      )}

      <div className="booking-order-product-quantity">
        Количество: <span>{quantity}</span>
      </div>
      <div className="booking-order-product-price">{price} RUB</div>
    </div>
  )
}

export default BookingProduct
