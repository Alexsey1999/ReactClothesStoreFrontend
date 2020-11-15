import React from 'react'

import shoppingCart from '../../assets/icons/shopping-cart.svg'

import './CartEmpty.scss'

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
