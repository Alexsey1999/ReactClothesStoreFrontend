// @ts-nocheck
import React from 'react'
import Button from '../Button'
import classNames from 'classnames'
import { Link, NavLink } from 'react-router-dom'
import axios from '../../axios'
import { useHistory, Route, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeJwt,
  logoutUser,
  removeUser,
  updateUser,
} from '../../store/users/actions'

import './Account.scss'
import Loader from '../Loader'
import { notify } from '../../utils/notify'
import { setCart } from '../../store/cart/actions'

const Account = () => {
  const [isChanging, setIsChanging] = React.useState(false)
  const [isDeliveryChanging, setIsDeliveryChanging] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

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

        setName(user.name || '')
        setSurname(user.surname || '')
        setThirdname(user.thirdname || '')
        setPhone(user.phone || '')

        setCountry(user.country || '')
        setCity(user.city || '')
        setArea(user.area || '')
        setAddress(user.address || '')
        setMailindex(user.mailindex || '')
      } catch (error) {
        console.log(error)
      }
    }
    getAccountSettings()
  }, [])

  const savePersonDataSettings = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
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

      notify(response.data.successMessage)

      dispatch(updateUser({ name, surname, thirdname, phone }))

      setIsChanging(false)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  const saveAddressDataSettings = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
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

      notify(response.data.successMessage)

      dispatch(updateUser({ country, city, area, address, mailindex }))

      setIsLoading(false)
      setIsDeliveryChanging(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
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
      if (localStorage.getItem('vkId')) {
        localStorage.removeItem('vkId')
      }

      dispatch(removeJwt())

      axios({
        method: 'GET',
        url: '/cart/clear',
      })

      dispatch(
        setCart({
          items: [],
          purePrice: 0,
          deliveryPrice: 0,
          totalQuantity: 0,
          totalPrice: 0,
        })
      )
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
                  <div className="account-socials">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 0C6.71601 0 0 6.7157 0 15C0 23.2843 6.71601 30 15 30C23.284 30 30 23.2843 30 15C30 6.7157 23.284 0 15 0ZM22.6088 16.6223C23.3079 17.3052 24.0476 17.9478 24.6752 18.7013C24.9532 19.0346 25.2153 19.3792 25.4148 19.7669C25.6996 20.3196 25.4425 20.9257 24.9477 20.9586L21.8747 20.958C21.081 21.0236 20.4494 20.7035 19.9169 20.1609C19.4919 19.7285 19.0975 19.2666 18.6881 18.8194C18.5208 18.6359 18.3447 18.4631 18.1347 18.3272C17.7158 18.0546 17.3518 18.1381 17.1118 18.5758C16.8672 19.0211 16.8114 19.5146 16.788 20.0102C16.7546 20.7348 16.5361 20.9242 15.809 20.9583C14.2554 21.031 12.7814 20.7953 11.4114 20.0121C10.2028 19.3212 9.26731 18.3462 8.45217 17.2423C6.86486 15.0902 5.64921 12.7283 4.55693 10.2985C4.3111 9.7513 4.49095 9.45852 5.09463 9.44716C6.0976 9.42783 7.10056 9.43028 8.10353 9.44624C8.51171 9.45268 8.78179 9.68624 8.93862 10.0714C9.48061 11.4049 10.1451 12.6737 10.9777 13.8503C11.1996 14.1637 11.4261 14.4761 11.7486 14.6974C12.1047 14.9417 12.376 14.861 12.5438 14.4635C12.6513 14.2109 12.6976 13.9409 12.7209 13.6702C12.8007 12.743 12.8102 11.8162 12.6721 10.8927C12.5862 10.3148 12.2612 9.94158 11.6851 9.83233C11.3917 9.77678 11.4347 9.66813 11.5774 9.50056C11.8251 9.21084 12.0571 9.03161 12.5208 9.03161L15.9928 9.031C16.5401 9.13841 16.6628 9.38394 16.7371 9.93514L16.7402 13.7936C16.7337 14.0069 16.8473 14.6391 17.2303 14.7787C17.5372 14.88 17.7397 14.6339 17.9233 14.4396C18.7559 13.556 19.3492 12.5131 19.8804 11.4338C20.1149 10.9577 20.3171 10.4652 20.5136 9.97166C20.6596 9.60675 20.8868 9.42721 21.2986 9.43335L24.642 9.43734C24.7406 9.43734 24.8406 9.43826 24.9382 9.45514C25.5017 9.55151 25.6561 9.79396 25.4817 10.3436C25.2074 11.2073 24.6743 11.9266 24.1531 12.6479C23.5946 13.4201 22.9989 14.1652 22.4458 14.9408C21.9376 15.6497 21.9778 16.0066 22.6088 16.6223Z"
                        fill={localStorage.getItem('vkId') ? '#000' : '#E8ECEF'}
                      />
                    </svg>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.875 13.5V17.25H25.725C24.825 22.5 20.625 26.25 15.375 26.25C9.225 26.25 4.125 21.15 4.125 15C4.125 8.85 9.225 3.75 15.375 3.75C18.525 3.75 21.225 5.1 23.175 7.2L25.875 4.5C23.175 1.8 19.575 0 15.375 0C7.125 0 0.375 6.75 0.375 15C0.375 23.25 7.125 30 15.375 30C23.625 30 29.625 23.25 29.625 15V13.5H16.875Z"
                        fill={
                          localStorage.getItem('googleId') ? '#000' : '#E8ECEF'
                        }
                      />
                    </svg>
                  </div>
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
                        {isLoading ? (
                          <Loader color="white" />
                        ) : (
                          'Сохранить изменения'
                        )}
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
                        {isLoading ? (
                          <Loader color="white" />
                        ) : (
                          'Сохранить изменения'
                        )}
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
                      ? user.orders.map((order, index) => (
                          <li key={order.ordertoken + index}>
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
