// @ts-nocheck
import React from 'react'
import Button from '../Button'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import axios from '../../axios'
import { useHistory } from 'react-router-dom'

import './Account.scss'

const Account = () => {
  const [isChanging, setIsChanging] = React.useState(false)
  const [name, setName] = React.useState('')
  const [isDeliveryChanging, setIsDeliveryChanging] = React.useState(false)
  const history = useHistory()

  const toggleChanging = () => {
    setIsChanging((prevVal) => !prevVal)
  }

  const toggleDeliveryChanging = () => {
    setIsDeliveryChanging((prevVal) => !prevVal)
  }

  const logoutUser = () => {
    try {
      axios({
        url: '/user/logout',
        method: 'GET',
      })
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="account">
      <div className="account-container">
        <div className="account-content">
          <h4 className="account-title">Мой аккаунт</h4>

          <div className="account-row">
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
            <div className="account-settings">
              <div className="account-socials"></div>
              <form
                action="/"
                className={classNames('personal-data', {
                  changing: isChanging,
                })}
              >
                <header className="personal-data-header">
                  <span>Персональные данные</span>
                  <span className="change" onClick={toggleChanging}>
                    {isChanging ? 'Отменить' : 'Изменить'}
                  </span>
                </header>
                <div className="personal-data-row">
                  <div className="input-group">
                    <label htmlFor="name">ИМЯ</label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      id="name"
                      type="text"
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="surname">ФАМИЛИЯ</label>
                    <input id="surname" type="text" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="thirdname">ОТЧЕСТВО</label>
                    <input id="thirdname" type="text" />
                  </div>
                </div>
                <div className="input-group phone-group">
                  <label htmlFor="phone">ТЕЛЕФОН</label>
                  <input id="phone" type="text" />
                </div>
                {isChanging && (
                  <Button
                    className="save-account-settings-btn"
                    disableDefaultStyles={true}
                  >
                    Сохранить изменения
                  </Button>
                )}
              </form>

              <form
                action=""
                className={classNames('account-delivery-settings', {
                  changing: isDeliveryChanging,
                })}
              >
                <header className="personal-data-header">
                  <span>Адрес доставки</span>
                  <span className="change" onClick={toggleDeliveryChanging}>
                    {isDeliveryChanging ? 'Отменить' : 'Изменить'}
                  </span>
                </header>
                <div className="personal-data-row">
                  <div className="input-group">
                    <label htmlFor="">СТРАНА</label>
                    <input type="text" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="">ГОРОД</label>
                    <input type="text" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="">КРАЙ/ОБЛАСТЬ/РЕГИОН</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="account-delivery-row">
                  <div className="input-group">
                    <label htmlFor="">УЛИЦА, ДОМ, КВАРТИРА</label>
                    <input type="text" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="">ПОЧТОВЫЙ ИНДЕКС</label>
                    <input type="text" />
                  </div>
                </div>
                {isDeliveryChanging && (
                  <Button
                    className="save-account-settings-btn"
                    disableDefaultStyles={true}
                  >
                    Сохранить изменения
                  </Button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
