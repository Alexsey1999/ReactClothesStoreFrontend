// @ts-nocheck
import React from 'react'

import Button from '../Button'
import CartEmpty from '../CartEmpty'
import CartItem from '../CartItem'

import leftArrow from '../../assets/icons/left-arrow.svg'

import './Cart.scss'

const Cart = ({ closeShoppingCart }) => {
  return (
    // <div className="shopping-cart-overlay">
    <div className="cart">
      <div onClick={closeShoppingCart} className="cart-return-buying">
        <img src={leftArrow} alt="" />
        <span>Вернуться к покупкам</span>
      </div>
      <div className="cart-my-goods">Мои покупки</div>
      <div className="cart-items">
        {/* <CartEmpty /> */}
        <CartItem />
        <CartItem />
      </div>
      <div className="cart-bottom">
        <div className="cart-total-price">
          <span>Общая стоимость:</span>
          <span>0 RUB</span>
        </div>
        <div className="cart-delivery">
          <span>Стоимость доставки:</span>
          <span>0 RUB</span>
        </div>
        <div className="cart-counted-price">
          <span>Итого:</span>
          <span>0 RUB</span>
        </div>
      </div>
      <div className="btn-wrapper">
        <Button className="cart-btn">Оформить заказ</Button>
      </div>
    </div>
    // </div>
  )
}

export default Cart
