// @ts-nocheck
// Libs
import React from 'react'
import ReactModal from 'react-modal'
import { useSelector, useDispatch } from 'react-redux'
import { closeShoppingCart } from '../../store/modals/actions'
import { setCart } from '../../store/cart/actions'
import axios from '../../axios'
import { Link, useHistory } from 'react-router-dom'

// Components
import Button from '../Button'
import CartItem from '../CartItem'

// Styles
import './Cart.scss'

// Images
import leftArrow from '../../assets/icons/left-arrow.svg'
import CartEmpty from '../CartEmpty'
import Loader from '../Loader'
import { notify } from '../../utils/notify'

const Cart: React.FC<ICartProps> = () => {
  const isShoppingCartOpened = useSelector(
    (state) => state.modals.isShoppingCartOpened
  )
  const [isLoading, setIsLoading] = React.useState(false)
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const history = useHistory()

  React.useEffect(() => {
    axios({
      method: 'GET',
      url: '/cart/items',
    }).then((response) => {
      if (!response.data) {
        dispatch(
          setCart({
            items: [],
            purePrice: 0,
            deliveryPrice: 0,
            totalQuantity: 0,
            totalPrice: 0,
          })
        )
      }
    })
  }, [])

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
            cart.items.map((cartItem, index) => (
              <CartItem
                key={cartItem.item._id + index}
                productIndex={index}
                {...cartItem}
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
          <Button onClick={makeOrder} className="cart-btn">
            {isLoading ? <Loader color="white" /> : 'Оформить заказ'}
          </Button>
        </div>
      </div>
    </ReactModal>
  )
}

export default Cart
