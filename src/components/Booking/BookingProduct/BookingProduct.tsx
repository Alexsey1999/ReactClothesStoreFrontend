// @ts-nocheck
import React from 'react'
import classNames from 'classnames'

import './BookingProduct.scss'

const BookingProduct = ({ name, size, quantity, price, orderPage }) => {
  return (
    <div
      className={classNames('booking-order-product', {
        orderPageProduct: orderPage,
      })}
    >
      <div className="booking-order-product-title">{name}</div>
      <div className="booking-order-product-size">
        Размер: <span>{size}</span>
      </div>
      <div className="booking-order-product-quantity">
        Количество: <span>{quantity}</span>
      </div>
      <div className="booking-order-product-price">{price} RUB</div>
    </div>
  )
}

export default BookingProduct
