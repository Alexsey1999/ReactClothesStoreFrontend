// Libs
import React from 'react'
import { Link } from 'react-router-dom'

// Interfaces
import { IUser } from '../../../interfaces/user'

// Styles
import './AccountOrders.scss'

interface IAccountOrdersProps {
  user: IUser
}

const AccountOrders: React.FC<IAccountOrdersProps> = ({ user }) => {
  return (
    <div className="account-orders">
      <div className="account-orders-title">История заказов</div>

      <ul className="account-orders-list">
        {user && user.orders.length
          ? user.orders.map((order, index) => (
              <li key={order.ordertoken + index}>
                <Link
                  to={{
                    pathname: `/order/browse/${order.ordertoken}`,
                    state: order,
                  }}
                >
                  <div>
                    <span className="ordertoken">{order.ordertoken}</span>
                  </div>
                </Link>
              </li>
            ))
          : 'Заказов нет'}
      </ul>
    </div>
  )
}

export default AccountOrders
