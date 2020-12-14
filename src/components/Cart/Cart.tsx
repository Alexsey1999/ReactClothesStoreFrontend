// @ts-nocheck
// Libs
import React from 'react'
import ReactModal from 'react-modal'
import { useSelector, useDispatch } from 'react-redux'
import { closeShoppingCart } from '../../store/modals/actions'

// Components
import Button from '../Button'
import CartItem from '../CartItem'

// Styles
import './Cart.scss'

// Images
import leftArrow from '../../assets/icons/left-arrow.svg'

const Cart: React.FC<ICartProps> = () => {
  const isShoppingCartOpened = useSelector(
    (state) => state.modals.isShoppingCartOpened
  )
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <ReactModal
      className="shoppingCart-modal"
      overlayClassName="default-modal-overlay"
      htmlOpenClassName="auth-modal-opened"
      isOpen={isShoppingCartOpened}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      closeTimeoutMS={500}
      onRequestClose={() => dispatch(closeShoppingCart())}
    >
      <div className="cart">
        <div
          onClick={() => dispatch(closeShoppingCart())}
          className="cart-return-buying"
        >
          <img src={leftArrow} alt="" />
          <span>Вернуться к покупкам</span>
        </div>
        <div className="cart-my-goods">Мои покупки</div>
        <div className="cart-items">
          {cart.items &&
            cart.items.map((cartItem, index) => (
              <CartItem
                key={cartItem.item._id}
                productIndex={index}
                {...cartItem}
              />
            ))}
        </div>
        <div className="cart-bottom">
          <div className="cart-total-price">
            <span>Общая стоимость:</span>
            <span>{cart.purePrice} RUB</span>
          </div>
          <div className="cart-delivery">
            <span>Стоимость доставки:</span>
            <span>{cart.deliveryPrice} RUB</span>
          </div>
          <div className="cart-counted-price">
            <span>Итого:</span>
            <span>{cart.totalPrice} RUB</span>
          </div>
        </div>
        <div className="btn-wrapper">
          <Button className="cart-btn">Оформить заказ</Button>
        </div>
      </div>
    </ReactModal>
  )
}

export default Cart
