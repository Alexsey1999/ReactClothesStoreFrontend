// Libs
import React from 'react'
import { withRouter, useHistory, RouteComponentProps } from 'react-router-dom'
import { IOrderItem } from '../../interfaces/order'

// Components
import BookingProduct from '../Booking/BookingProduct'

// Styles
import './OrderPage.scss'

const OrderPage: React.FC<RouteComponentProps> = (props) => {
  const history = useHistory()

  const order: any = props.location.state

  if (!order) {
    history.push('/')
  }

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
                  {order?.items.map((product: IOrderItem, index: number) => (
                    <BookingProduct
                      key={product.item?._id! + index}
                      name={product.item.name}
                      size={product.size!}
                      quantity={product.quantity}
                      price={product.price}
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
                      <span>{order?.totalPrice} RUB</span>
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
