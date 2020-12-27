// Libs
import React, { useEffect } from 'react'
import axios from '../../axios'
import { useParams, useHistory } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { RootStateOrAny, useSelector } from 'react-redux'
import { Elements } from '@stripe/react-stripe-js'

// Components
import BookingForm from './BookingForm'

// Styles
import './Booking.scss'
import BookingSidebar from './BookingSidebar'

const Booking = () => {
  const { cart } = useSelector((state: RootStateOrAny) => state.cart)
  const stripe = loadStripe(
    'pk_test_51Hzfg4EWaRj0TMbRs4RZRHlhStRRbqAltHfCMhcbAA6PKoAYxrSr7CrGIf5K1iBzVmY89UIpQSWltVEizRjxxLhc00xKvE7X6L'
  )
  const { orderid }: any = useParams()
  const history = useHistory()

  useEffect(() => {
    const getOrderToken = async () => {
      if (localStorage.getItem('ordertoken') !== orderid) {
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
                <BookingForm />
              </Elements>
            </div>

            <div className="booking-order">
              <div className="booking-order-title">Ваш заказ</div>

              <BookingSidebar cart={cart} />

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
