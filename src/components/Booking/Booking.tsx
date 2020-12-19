// @ts-nocheck
import React from 'react'
import axios from '../../axios'
import './Booking.scss'
import { useParams, useHistory, Link } from 'react-router-dom'
import Button from '../Button'
import { loadStripe } from '@stripe/stripe-js'
import Payment from '../Payment'
import { useSelector } from 'react-redux'

import {
  Elements,
  CardElement,
  ElementsConsumer,
} from '@stripe/react-stripe-js'
import BookingForm from './BookingForm'
import BookingProduct from './BookingProduct'

const Booking = () => {
  const { cart } = useSelector((state) => state.cart)
  const [user, setUser] = React.useState({})
  const stripe = loadStripe(
    'pk_test_51Hzfg4EWaRj0TMbRs4RZRHlhStRRbqAltHfCMhcbAA6PKoAYxrSr7CrGIf5K1iBzVmY89UIpQSWltVEizRjxxLhc00xKvE7X6L'
  )
  const { orderid } = useParams()
  const history = useHistory()

  React.useEffect(() => {
    const getOrderToken = async () => {
      if (!localStorage.getItem('ordertoken')) {
        history.push('/')
        return
      }

      try {
        const response = await axios({
          method: 'POST',
          data: {
            orderid,
          },
          url: '/booking/checktoken',
        })

        if (!response.data) {
          history.push('/')
        }
      } catch (error) {
        console.log(error)
      }
    }

    getOrderToken()
  }, [])

  React.useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios({
          method: 'GET',
          url: '/user',
        })
        setUser(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }

    getUser()
  }, [])

  const orderNumber = () => {
    if (localStorage.getItem('ordertoken')) {
      return localStorage.getItem('ordertoken')
    }
    return 'nothing'
  }

  return (
    <div className="booking">
      <div className="booking-container">
        <div className="booking-content">
          <header className="booking-header">
            <div className="booking-title">Оформление заказа</div>
            <div className="booking-order-number">
              НОМЕР ЗАКАЗА: {orderNumber()}
            </div>
          </header>

          <div className="booking-inner">
            <div className="booking-delivery">
              <div className="booking-delivery-title">
                Введите данные для доставки
              </div>
              <Elements stripe={stripe}>
                <BookingForm user={user} />
              </Elements>
            </div>

            <div className="booking-order">
              <div className="booking-order-title">Ваш заказ</div>

              <aside>
                <div className="booking-order-inner">
                  {cart.items.length &&
                    cart.items.map((product) => (
                      <BookingProduct
                        key={product.item._id}
                        name={product.item.name}
                        size={product.size}
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

              <div className="booking-order-totalprice">
                ИТОГО К ОПЛАТЕ: <span> {cart.totalPrice || 0} RUB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
