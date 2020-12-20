// @ts-nocheck
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React from 'react'
import Button from '../../Button'
import Payment from '../../Payment'
import axios from '../../../axios'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import './BookingForm.scss'
import { setUser } from '../../../store/users/actions'
import { setCart } from '../../../store/cart/actions'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { notify } from '../../../utils/notify'
import Loader from '../../Loader'

const BookingForm = () => {
  const { cart } = useSelector((state) => state.cart)
  const { user } = useSelector((state) => state.users)

  const [isLoading, setIsLoading] = React.useState(false)

  const dispatch = useDispatch()
  const history = useHistory()

  const [name, setName] = React.useState(() => {
    return user.name
  })

  const [surname, setSurname] = React.useState('')
  const [thirdname, setThirdname] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')

  const [country, setCountry] = React.useState('')
  const [city, setCity] = React.useState('')
  const [area, setArea] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [mailindex, setMailindex] = React.useState('')

  const [note, setNote] = React.useState('')

  const stripe = useStripe()
  const elements = useElements()

  const nameRef = React.useRef()
  const phoneRef = React.useRef()
  const addressRef = React.useRef()
  const emailRef = React.useRef()

  const countryRef = React.useRef()
  const cityRef = React.useRef()
  const areaRef = React.useRef()
  const surnameRef = React.useRef()
  const thirdnameRef = React.useRef()
  const mailindexRef = React.useRef()
  const noteRef = React.useRef()

  const buyProducts = async (e) => {
    e.preventDefault()

    const description = {
      name: name || nameRef.current.value,
      surname: surname || surnameRef.current.value,
      thirdname: thirdname || thirdnameRef.current.value,
      area: area || areaRef.current.value,
      note: note || noteRef.current.value,
      mailindex: mailindex || mailindexRef.current.value,
      country: country || countryRef.current.value,
      city: city || cityRef.current.value,
      phone: phone || phoneRef.current.value,
      address: address || addressRef.current.value,
    }

    if (!stripe || !elements) {
      return
    }
    setIsLoading(true)

    const { data } = await axios({
      method: 'POST',
      url: '/booking/payment',
      data: {
        amount: cart.totalPrice * 100,
        description,
      },
    })

    const paymentMethodReq = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        name: name || nameRef.current.value,
        phone: phone || phoneRef.current.value,
        address: address || addressRef.current.value,
        email: email || emailRef.current.value,
      },
    })

    if (paymentMethodReq.error) {
      notify(paymentMethodReq.error.message)
      setIsLoading(false)
    } else {
      await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id,
      })

      notify('Оплата успешно проведена')

      try {
        await axios({
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
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }

      try {
        const response = await axios({
          method: 'POST',
          url: '/booking/addorder',
          data: {
            ordertoken: localStorage.getItem('ordertoken') || 'nothing',
            description,
            user,
            cart,
          },
        })

        localStorage.getItem('ordertoken') &&
          localStorage.removeItem('ordertoken')

        window.location.href = 'http://localhost:3000'
      } catch (error) {
        console.log(error)
      }
    }
  }

  const updateUserData = async (e) => {
    const field = e.target.name

    try {
      const response = await axios({
        method: 'POST',
        url: '/user/update',
        data: {
          id: user._id,
          fieldValue: e.target.value,
          field,
        },
      })
      notify(response.data.message)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form action="" onSubmit={buyProducts}>
        <div className="form-field">
          <label htmlFor="name">ИМЯ</label>
          <input
            id="name"
            defaultValue={user.name}
            onChange={(e) => setName(e.target.value)}
            onBlur={updateUserData}
            type="text"
            ref={nameRef}
            name="name"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="surname">ФАМИЛИЯ</label>
          <input
            id="surname"
            type="text"
            defaultValue={user.surname}
            onChange={(e) => setSurname(e.target.value)}
            onBlur={updateUserData}
            ref={surnameRef}
            name="surname"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="thirdname">ОТЧЕСТВО</label>
          <input
            id="thirdname"
            type="text"
            name="thirdname"
            defaultValue={user.thirdname}
            onChange={(e) => setThirdname(e.target.value)}
            onBlur={updateUserData}
            ref={thirdnameRef}
            required
          />
        </div>

        <div className="form-fields-row">
          <div className="form-field">
            <label htmlFor="phone">ТЕЛЕФОН</label>
            <input
              id="phone"
              defaultValue={user.phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={updateUserData}
              type="text"
              name="phone"
              ref={phoneRef}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">ЭЛ.ПОЧТА</label>
            <input
              id="email"
              defaultValue={user.email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={updateUserData}
              type="email"
              name="email"
              ref={emailRef}
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="country">СТРАНА</label>
          <input
            id="country"
            defaultValue={user.country}
            onChange={(e) => setCountry(e.target.value)}
            onBlur={updateUserData}
            type="text"
            ref={countryRef}
            name="country"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="city">ГОРОД</label>
          <input
            id="city"
            defaultValue={user.city}
            onChange={(e) => setCity(e.target.value)}
            onBlur={updateUserData}
            type="text"
            ref={cityRef}
            name="city"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="city">КРАЙ/ОБЛАСТЬ/РЕГИОН</label>
          <input
            id="area"
            defaultValue={user.area}
            onChange={(e) => setArea(e.target.value)}
            onBlur={updateUserData}
            type="text"
            name="area"
            ref={areaRef}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="address">УЛИЦА, ДОМ, КВАРТИРА</label>
          <input
            id="address"
            defaultValue={user.address}
            onChange={(e) => setAddress(e.target.value)}
            onBlur={updateUserData}
            type="text"
            name="address"
            ref={addressRef}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="mailindex">ПОЧТОВЫЙ ИНДЕКС</label>
          <input
            id="mailindex"
            defaultValue={user.mailindex}
            onChange={(e) => setMailindex(e.target.value)}
            onBlur={updateUserData}
            type="text"
            name="mailindex"
            ref={mailindexRef}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="note">ПРИМЕЧАНИЕ</label>
          <input
            id="note"
            defaultValue={user.note}
            onChange={(e) => setNote(e.target.value)}
            onBlur={updateUserData}
            type="text"
            name="note"
            ref={noteRef}
            required
          />
        </div>
        <Payment />

        <Button className="continue-ordering-btn" disableDefaultStyles={true}>
          {isLoading ? <Loader color="white" /> : <span>Оплатить</span>}
        </Button>
      </form>
    </>
  )
}

export default BookingForm
