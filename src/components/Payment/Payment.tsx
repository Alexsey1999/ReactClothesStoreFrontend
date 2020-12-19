// @ts-nocheck
import React from 'react'
import { Elements, CardElement } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useHistory, useParams } from 'react-router-dom'
import axios from '../../axios'

import './Payment.scss'

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#fff',
      color: '#fff',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#fff' },
      '::placeholder': { color: '#fff' },
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
  },
}

const Payment = () => {
  const stripe = loadStripe(
    'pk_test_51Hzfg4EWaRj0TMbRs4RZRHlhStRRbqAltHfCMhcbAA6PKoAYxrSr7CrGIf5K1iBzVmY89UIpQSWltVEizRjxxLhc00xKvE7X6L'
  )
  const history = useHistory()
  const { orderid } = useParams()

  React.useEffect(() => {
    const getOrderToken = async () => {
      if (!localStorage.getItem('ordertoken')) {
        history.push('/')
        return
      }

      try {
        const response = await axios({
          method: 'POST',
          data: {
            orderid,
          },
          url: '/booking/checktoken',
        })

        if (!response.data) {
          history.push('/')
        }
      } catch (error) {
        console.log(error)
      }
    }

    getOrderToken()
  }, [])

  return (
    <fieldset className="FormGroup">
      <div className="FormRow">
        <CardElement options={CARD_OPTIONS} />
      </div>
    </fieldset>
  )
}

export default Payment
