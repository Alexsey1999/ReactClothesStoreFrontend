// Libs
import React from 'react'

// Styles
import './CartEmpty.scss'

// Images
import shoppingCart from '../../assets/icons/shopping-cart.svg'

const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <div className="cart-empty-img">
        <img src={shoppingCart} alt="" />
      </div>

      <span>Вы не делали никаких покупок, поэтому корзина пуста</span>
    </div>
  )
}

export default CartEmpty
