// Libs
import React from 'react'

// Components
import { CardElement } from '@stripe/react-stripe-js'

// Styles
import './Payment.scss'
import { StripeCardElementOptions } from '@stripe/stripe-js'

const CARD_OPTIONS: StripeCardElementOptions = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#fff',
      color: '#fff',
      fontWeight: '500',
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

const Payment: React.FC = () => {
  return (
    <fieldset className="FormGroup">
      <div className="FormRow">
        <CardElement options={CARD_OPTIONS} />
      </div>
    </fieldset>
  )
}

export default Payment
