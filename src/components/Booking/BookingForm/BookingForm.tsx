// Libs
import React, { useState, useRef, FormEvent, FocusEvent } from 'react'
import axios from '../../../axios'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

// Components
import Button from '../../Button'
import Payment from '../../Payment'

// Styles
import './BookingForm.scss'
import 'react-toastify/dist/ReactToastify.css'

// Redux
import { setCart } from '../../../store/cart/actions'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'

// Utils
import { notify } from '../../../utils/notify'
import emptyCart from '../../../utils/emptyCart'

const BookingForm: React.FC = () => {
  const { cart } = useSelector((state: RootStateOrAny) => state.cart)
  const { user } = useSelector((state: RootStateOrAny) => state.users)

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [name, setName] = useState<string>(() => {
    return user ? user.name : ''
  })

  const [surname, setSurname] = useState<string>('')
  const [thirdname, setThirdname] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const [country, setCountry] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [area, setArea] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [mailindex, setMailindex] = useState<string>('')
  const [note, setNote] = useState<string>('')

  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const addressRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const countryRef = useRef<HTMLInputElement>(null)
  const cityRef = useRef<HTMLInputElement>(null)
  const areaRef = useRef<HTMLInputElement>(null)
  const surnameRef = useRef<HTMLInputElement>(null)
  const thirdnameRef = useRef<HTMLInputElement>(null)
  const mailindexRef = useRef<HTMLInputElement>(null)
  const noteRef = useRef<HTMLInputElement>(null)

  const stripe = useStripe()
  const elements = useElements()

  const dispatch = useDispatch()

  const buyProducts = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const description = {
      name: name || nameRef.current!.value,
      surname: surname || surnameRef.current!.value,
      thirdname: thirdname || thirdnameRef.current!.value,
      area: area || areaRef.current!.value,
      note: note || noteRef.current!.value,
      mailindex: mailindex || mailindexRef.current!.value,
      country: country || countryRef.current!.value,
      city: city || cityRef.current!.value,
      phone: phone || phoneRef.current!.value,
      address: address || addressRef.current!.value,
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
      card: elements.getElement(CardElement)!,
      billing_details: {
        name: name || nameRef.current!.value,
        phone: phone || phoneRef.current!.value,
        email: email || emailRef.current!.value,
      },
    })

    if (paymentMethodReq.error) {
      notify(paymentMethodReq.error.message!)
      setIsLoading(false)
    } else {
      await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: paymentMethodReq.paymentMethod!.id,
      })

      notify('Оплата успешно проведена')

      try {
        await axios({
          method: 'GET',
          url: '/cart/clear',
        })

        dispatch(setCart(emptyCart))
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }

      try {
        await axios({
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

  const updateUserData = async (e: FocusEvent<HTMLInputElement>) => {
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

      <Button
        className="continue-ordering-btn"
        loaderColor="white"
        disableDefaultStyles={true}
        isLoading={isLoading}
      >
        Оплатить
      </Button>
    </form>
  )
}

export default BookingForm
