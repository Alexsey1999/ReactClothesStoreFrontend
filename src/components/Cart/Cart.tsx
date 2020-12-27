// Libs
import React, { useEffect } from 'react'
import axios from '../../axios'
import { useHistory } from 'react-router-dom'

// Redux
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { closeShoppingCart } from '../../store/modals/actions'
import { setCart } from '../../store/cart/actions'

// Components
import Button from '../Button'
import CartItem from '../CartItem'
import CartEmpty from '../CartEmpty'
import ReactModal from 'react-modal'

// Styles
import './Cart.scss'

// Images
import leftArrow from '../../assets/icons/left-arrow.svg'

// Utils
import emptyCart from '../../utils/emptyCart'
import { notify } from '../../utils/notify'

// Interfaces
import { ICartItem } from '../../interfaces/cart'

const Cart: React.FC = () => {
  const isShoppingCartOpened = useSelector(
    (state: RootStateOrAny) => state.modals.isShoppingCartOpened
  )
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { cart } = useSelector((state: RootStateOrAny) => state.cart)

  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/cart/items',
    }).then((response) => {
      if (!response.data) {
        dispatch(setCart(emptyCart))
      }
    })
  }, [dispatch])

  const makeOrder = async () => {
    setIsLoading(true)
    try {
      const response = await axios({
        method: 'GET',
        url: 'booking',
      })

      if (response.data.message) {
        notify(response.data.message)
        setIsLoading(false)
        return
      }

      dispatch(closeShoppingCart())

      setIsLoading(false)

      localStorage.setItem('ordertoken', response.data)

      history.push(`/booking/${response.data}/details`)
    } catch (error) {
      console.log(error)
    }
  }

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
          {cart.items.length ? (
            cart.items.map((cartItem: ICartItem, index: number) => (
              <CartItem
                key={cartItem.item?._id! + index}
                productIndex={index}
                price={cartItem.price}
                quantity={cartItem.quantity}
                size={cartItem.size!}
                item={cartItem.item}
              />
            ))
          ) : (
            <CartEmpty />
          )}
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
          <Button
            onClick={makeOrder}
            isLoading={isLoading}
            loaderColor="white"
            className="cart-btn"
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </ReactModal>
  )
}

export default Cart
