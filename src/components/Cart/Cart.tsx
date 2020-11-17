// Libs
import React from 'react'
import ReactModal from 'react-modal'

// Components
import Button from '../Button'
import CartItem from '../CartItem'

// Styles
import './Cart.scss'

// Images
import leftArrow from '../../assets/icons/left-arrow.svg'

// Cart props interface
interface ICartProps {
  closeShoppingCart: () => void
  isShoppingCartOpened: boolean
}

const Cart: React.FC<ICartProps> = ({
  closeShoppingCart,
  isShoppingCartOpened,
}) => {
  return (
    <ReactModal
      className="shoppingCart-modal"
      overlayClassName="default-modal-overlay"
      htmlOpenClassName="auth-modal-opened"
      isOpen={isShoppingCartOpened}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      closeTimeoutMS={500}
      onRequestClose={closeShoppingCart}
    >
      <div className="cart">
        <div onClick={closeShoppingCart} className="cart-return-buying">
          <img src={leftArrow} alt="" />
          <span>Вернуться к покупкам</span>
        </div>
        <div className="cart-my-goods">Мои покупки</div>
        <div className="cart-items">
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
    </ReactModal>
  )
}

export default Cart
