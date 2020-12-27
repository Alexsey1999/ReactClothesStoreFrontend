// Libs
import React from 'react'
import { NavLink } from 'react-router-dom'

// Styles
import './AccountMenu.scss'

// Components
import Button from '../../Button'

interface IAccountMenuProps {
  logoutUser: () => void
}

const AccountMenu: React.FC<IAccountMenuProps> = ({ logoutUser }) => {
  return (
    <div className="account-menu">
      <div className="account-menu-block">
        <ul>
          <li>
            <NavLink activeClassName="active" exact to="/account">
              Личные данные
            </NavLink>
          </li>
          <li>
            <NavLink to="/account/orders" activeClassName="active">
              Мои заказы
            </NavLink>
          </li>
        </ul>
        <Button
          onClick={logoutUser}
          className="account-logout"
          disableDefaultStyles={true}
        >
          Выйти из аккаунта
        </Button>
      </div>
    </div>
  )
}

export default AccountMenu
