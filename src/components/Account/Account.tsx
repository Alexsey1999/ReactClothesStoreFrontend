// Libs
import React, { useState, useEffect, FormEvent } from 'react'
import axios from '../../axios'
import { useHistory, Route } from 'react-router-dom'

// Components
import AccountMenu from './AccountMenu'
import AccountOrders from './AccountOrders'
import AccountSocials from './AccountSocials'
import AccountPersonDataForm from './AccountPersonDataForm'
import AccountPersonDeliveryForm from './AccountPersonDeliveryForm'

// Styles
import './Account.scss'

// Redux
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import {
  removeJwt,
  removeUser,
  updatePersonData,
  updatePersonDeliveryData,
} from '../../store/users/actions'
import { setCart } from '../../store/cart/actions'

// Utils
import { notify } from '../../utils/notify'
import emptyCart from '../../utils/emptyCart'
import { removeTokenIfExists } from '../../utils/tokens'

const Account: React.FC = () => {
  const user = useSelector((state: RootStateOrAny) => state.users.user)
  const [isChanging, setIsChanging] = useState<boolean>(false)
  const [isDeliveryChanging, setIsDeliveryChanging] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [name, setName] = useState<string>('')
  const [surname, setSurname] = useState<string>('')
  const [thirdname, setThirdname] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  const [country, setCountry] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [area, setArea] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [mailindex, setMailindex] = useState<string>('')

  const history = useHistory()
  const dispatch = useDispatch()

  const toggleChanging = () => {
    setIsChanging((prevVal) => !prevVal)
  }

  const toggleDeliveryChanging = () => {
    setIsDeliveryChanging((prevVal) => !prevVal)
  }

  useEffect(() => {
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

  const savePersonDataSettings = async (e: FormEvent<HTMLFormElement>) => {
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

      dispatch(updatePersonData({ name, surname, thirdname, phone }))

      setIsChanging(false)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  const saveAddressDataSettings = async (e: FormEvent<HTMLFormElement>) => {
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

      dispatch(
        updatePersonDeliveryData({ country, city, area, address, mailindex })
      )

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

      removeTokenIfExists('jwt')
      removeTokenIfExists('googleId')
      removeTokenIfExists('vkId')

      dispatch(removeJwt())

      axios({
        method: 'GET',
        url: '/cart/clear',
      })

      dispatch(setCart(emptyCart))
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
            <AccountMenu logoutUser={logoutUser} />
            <div className="account-settings">
              <Route path="/account" exact>
                <div className="account-person-data">
                  <AccountSocials />

                  <AccountPersonDataForm
                    submitHandler={savePersonDataSettings}
                    isChanging={isChanging}
                    toggleChanging={toggleChanging}
                    name={name}
                    surname={surname}
                    thirdname={thirdname}
                    phone={phone}
                    setName={setName}
                    setSurname={setSurname}
                    setThirdname={setThirdname}
                    setPhone={setPhone}
                    isLoading={isLoading}
                  />

                  <AccountPersonDeliveryForm
                    submitHandler={saveAddressDataSettings}
                    isDeliveryChanging={isDeliveryChanging}
                    toggleDeliveryChanging={toggleDeliveryChanging}
                    country={country}
                    city={city}
                    area={area}
                    address={address}
                    mailindex={mailindex}
                    setCountry={setCountry}
                    setCity={setCity}
                    setArea={setArea}
                    setAddress={setAddress}
                    setMailindex={setMailindex}
                    isLoading={isLoading}
                  />
                </div>
              </Route>

              <Route path="/account/orders">
                <AccountOrders user={user} />
              </Route>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
