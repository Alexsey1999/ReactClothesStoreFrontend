// @ts-nocheck
import React from 'react'
import BookingProduct from '../Booking/BookingProduct'
import { useSelector, useDispatch } from 'react-redux'

import './OrderPage.scss'
import { withRouter } from 'react-router-dom'

const OrderPage = (props) => {
  const { user } = useSelector((state) => state.users)

  const order = props.location.state

  console.log(order)

  const dispatch = useDispatch()
  return (
    <div className="order-page">
      <div className="order-page-container">
        <div className="order-page-wrapper">
          <div className="order-page-content">
            <header className="order-page-header">
              <div className="order-page-title">Информация по заказу</div>
              <div className="order-page-order-info">
                НОМЕР ЗАКАЗА: {order?.ordertoken}
              </div>
            </header>

            <div className="order-page-row">
              <div className="order-page-info">
                <aside className="order-page-items">
                  {order?.items.map((product) => (
                    <BookingProduct
                      key={product.item._id}
                      name={product.item.name}
                      size={product.size}
                      quantity={product.quantity}
                      price={product.price}
                      orderPage={true}
                    />
                  ))}

                  <div className="order-page-items-cost">
                    <div className="order-page-pure-price">
                      Общая стоимость:
                      <span>{order?.purePrice} RUB</span>
                    </div>
                    <div className="order-page-delivery-price">
                      Стоимость доставки:
                      <span>{order?.deliveryPrice} RUB</span>
                    </div>
                    <div className="order-page-total-price">
                      Итого:
                      <span>{order.totalPrice} RUB</span>
                    </div>
                  </div>
                </aside>

                <aside className="order-address-sidebar">
                  <div className="order-address-sidebar-delivery">
                    <span>Доставка в:</span>
                    <div className="order-address-sidebar-person-address">
                      {`${order?.country}, ${order?.area}, ${order?.city}, ${order?.address}, ${order?.mailindex}`}
                    </div>
                  </div>
                  <div className="order-address-sidebar-person-info">
                    <span>На имя:</span>
                    <div className="order-address-sidebar-person-contacts">
                      <div className="order-address-name">
                        {order?.personName}
                      </div>
                      <div className="order-address-phone">{order?.phone}</div>
                    </div>
                  </div>
                </aside>
              </div>
              <div className="order-page-address"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(OrderPage)
