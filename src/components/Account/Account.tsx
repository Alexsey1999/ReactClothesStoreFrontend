// @ts-nocheck
import React from 'react'
import Button from '../Button'
import classNames from 'classnames'
import { Link, NavLink } from 'react-router-dom'
import axios from '../../axios'
import { useHistory, Route, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeJwt, logoutUser, removeUser } from '../../store/users/actions'

import './Account.scss'

const Account = () => {
  const [isChanging, setIsChanging] = React.useState(false)
  const [isDeliveryChanging, setIsDeliveryChanging] = React.useState(false)

  const [name, setName] = React.useState('')
  const [surname, setSurname] = React.useState('')
  const [thirdname, setThirdname] = React.useState('')
  const [phone, setPhone] = React.useState('')

  const [country, setCountry] = React.useState('')
  const [city, setCity] = React.useState('')
  const [area, setArea] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [mailindex, setMailindex] = React.useState('')

  const history = useHistory()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.users)

  const toggleChanging = () => {
    setIsChanging((prevVal) => !prevVal)
  }

  const toggleDeliveryChanging = () => {
    setIsDeliveryChanging((prevVal) => !prevVal)
  }

  React.useEffect(() => {
    const getAccountSettings = async () => {
      try {
        const response = await axios({
          method: 'GET',
          url: '/account/settings',
        })

        const user = response.data

        setName(user.name)
        setSurname(user.surname)
        setThirdname(user.thirdname)
        setPhone(user.phone)

        setCountry(user.country)
        setCity(user.city)
        setArea(user.area)
        setAddress(user.address)
        setMailindex(user.mailindex)
      } catch (error) {
        console.log(error)
      }
    }
    getAccountSettings()
  }, [])

  const savePersonDataSettings = async (e) => {
    e.preventDefault()
    try {
      const response = await axios({
        method: 'POST',
        data: {
          name,
          surname,
          thirdname,
          phone,
        },
        url: '/account/persondata',
      })

      // setName(response.data.name)

      setIsChanging(false)
    } catch (error) {
      console.log(error)
    }
  }

  const saveAddressDataSettings = async (e) => {
    e.preventDefault()
    try {
      const response = await axios({
        method: 'POST',
        data: {
          country,
          city,
          area,
          address,
          mailindex,
        },
        url: '/account/addressdata',
      })
      setIsDeliveryChanging(false)
    } catch (error) {
      console.log(error)
    }
  }

  const logoutUser = () => {
    try {
      axios({
        url: '/user/logout',
        method: 'GET',
      })
      if (localStorage.getItem('jwt')) {
        localStorage.removeItem('jwt')
      }
      if (localStorage.getItem('googleId')) {
        localStorage.removeItem('googleId')
      }

      dispatch(removeJwt())
      dispatch(removeUser())
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
              <Route path="/account" exact>
                <div className="account-person-data">
                  <div className="account-socials"></div>
                  <form
                    action="/"
                    onSubmit={savePersonDataSettings}
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
                        <input
                          onChange={(e) => setSurname(e.target.value)}
                          value={surname}
                          id="surname"
                          type="text"
                        />
                      </div>
                      <div className="input-group">
                        <label htmlFor="thirdname">ОТЧЕСТВО</label>
                        <input
                          onChange={(e) => setThirdname(e.target.value)}
                          value={thirdname}
                          id="thirdname"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="input-group phone-group">
                      <label htmlFor="phone">ТЕЛЕФОН</label>
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        id="phone"
                        type="text"
                      />
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
                    onSubmit={saveAddressDataSettings}
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
                        <input
                          onChange={(e) => setCountry(e.target.value)}
                          value={country}
                          type="text"
                        />
                      </div>
                      <div className="input-group">
                        <label htmlFor="">ГОРОД</label>
                        <input
                          onChange={(e) => setCity(e.target.value)}
                          value={city}
                          type="text"
                        />
                      </div>
                      <div className="input-group">
                        <label htmlFor="">КРАЙ/ОБЛАСТЬ/РЕГИОН</label>
                        <input
                          onChange={(e) => setArea(e.target.value)}
                          value={area}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="account-delivery-row">
                      <div className="input-group">
                        <label htmlFor="">УЛИЦА, ДОМ, КВАРТИРА</label>
                        <input
                          onChange={(e) => setAddress(e.target.value)}
                          value={address}
                          type="text"
                        />
                      </div>
                      <div className="input-group">
                        <label htmlFor="">ПОЧТОВЫЙ ИНДЕКС</label>
                        <input
                          onChange={(e) => setMailindex(e.target.value)}
                          value={mailindex}
                          type="text"
                        />
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
              </Route>

              <Route path="/account/orders">
                <div className="account-orders">
                  <div className="account-orders-title">История заказов</div>

                  <ul className="account-orders-list">
                    {user && user.orders.length
                      ? user.orders.map((order) => (
                          <li key={order.ordertoken}>
                            <Link
                              to={{
                                pathname: `/order/browse/${order.ordertoken}`,
                                state: order,
                              }}
                            >
                              <div>
                                <span className="ordertoken">
                                  {order.ordertoken}
                                </span>
                              </div>
                            </Link>
                          </li>
                        ))
                      : 'Заказов нет'}
                  </ul>
                </div>
              </Route>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
