// @ts-nocheck
import React from 'react'
import axios from '../../axios'
import './Booking.scss'
import { useParams, useHistory } from 'react-router-dom'
import Button from '../Button'

const Booking = () => {
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

              <form action="">
                <div className="form-field">
                  <label htmlFor="name">ИМЯ</label>
                  <input id="name" type="text" name="name" required />
                </div>

                <div className="form-field">
                  <label htmlFor="surname">ФАМИЛИЯ</label>
                  <input id="surname" type="text" name="surname" required />
                </div>

                <div className="form-field">
                  <label htmlFor="thirdname">ОТЧЕСТВО</label>
                  <input id="thirdname" type="text" name="thirdname" required />
                </div>

                <div className="form-fields-row">
                  <div className="form-field">
                    <label htmlFor="phone">ТЕЛЕФОН</label>
                    <input id="phone" type="text" name="phone" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">ЭЛ.ПОЧТА</label>
                    <input id="email" type="email" name="email" required />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="country">СТРАНА</label>
                  <input id="country" type="text" name="country" required />
                </div>

                <div className="form-field">
                  <label htmlFor="city">ГОРОД</label>
                  <input id="city" type="text" name="city" required />
                </div>

                <div className="form-field">
                  <label htmlFor="city">КРАЙ/ОБЛАСТЬ/РЕГИОН</label>
                  <input id="area" type="text" name="area" required />
                </div>

                <div className="form-field">
                  <label htmlFor="address">УЛИЦА, ДОМ, КВАРТИРА</label>
                  <input id="address" type="text" name="address" required />
                </div>

                <div className="form-field">
                  <label htmlFor="mailindex">ПОЧТОВЫЙ ИНДЕКС</label>
                  <input id="mailindex" type="text" name="mailindex" required />
                </div>

                <div className="form-field">
                  <label htmlFor="note">ПРИМЕЧАНИЕ</label>
                  <input id="note" value="—" type="text" name="note" required />
                </div>

                <Button
                  className="continue-ordering-btn"
                  disableDefaultStyles={true}
                >
                  <span>Далее</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M19.7709 9.44699C19.7706 9.44675 19.7704 9.44648 19.7702 9.44624L15.688 5.38375C15.3821 5.07941 14.8875 5.08054 14.5831 5.3864C14.2787 5.69222 14.2799 6.18687 14.5857 6.49125L17.3265 9.21874H0.78125C0.349766 9.21874 0 9.56851 0 9.99999C0 10.4315 0.349766 10.7812 0.78125 10.7812H17.3264L14.5857 13.5087C14.2799 13.8131 14.2788 14.3078 14.5831 14.6136C14.8875 14.9195 15.3822 14.9205 15.688 14.6162L19.7702 10.5537C19.7704 10.5535 19.7706 10.5532 19.7709 10.553C20.0769 10.2476 20.0759 9.75136 19.7709 9.44699Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Button>
              </form>
            </div>

            <div className="booking-order">
              <div className="booking-order-title">Ваш заказ</div>

              <aside>
                <div className="booking-order-inner">
                  <div className="booking-order-product">
                    <div className="booking-order-product-title">
                      B.O.M.J Black
                    </div>
                    <div className="booking-order-product-size">
                      Размер: <span>L</span>
                    </div>
                    <div className="booking-order-product-quantity">
                      Количество: <span>1</span>
                    </div>
                    <div className="booking-order-product-price">2 300 RUB</div>
                  </div>

                  <div className="booking-order-cost">
                    <div className="booking-order-commonprice">
                      Общая стоимость: <span>4 950 RUB</span>
                    </div>
                    <div className="booking-order-delivery">
                      Стоимость доставки: <span>1 100 RUB</span>
                    </div>
                  </div>
                </div>
              </aside>

              <div className="booking-order-totalprice">
                ИТОГО К ОПЛАТЕ: <span> 6 050 RUB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
