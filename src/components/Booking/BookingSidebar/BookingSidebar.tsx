// Libs
import React from 'react'

// Components
import BookingProduct from '../BookingProduct'

// Styles
import './BookingSidebar.scss'

// Interfaces
import { ICart } from '../../../interfaces/cart'

interface IBookingSidebarProps {
  cart: ICart
}

const BookingSidebar: React.FC<IBookingSidebarProps> = ({ cart }) => {
  return (
    <aside className="booking-sidebar">
      <div className="booking-order-inner">
        {cart.items.length &&
          cart.items.map((product, index) => (
            <BookingProduct
              key={product.item?._id! + index}
              name={product.item.name}
              size={product.size!}
              quantity={product.quantity}
              price={product.price}
            />
          ))}

        <div className="booking-order-cost">
          <div className="booking-order-commonprice">
            Общая стоимость: <span>{cart.purePrice || 0} RUB</span>
          </div>
          <div className="booking-order-delivery">
            Стоимость доставки:
            <span>{cart.deliveryPrice || 0} RUB</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default BookingSidebar
