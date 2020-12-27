// Libs
import React, { FormEvent } from 'react'
import classNames from 'classnames'

// Components
import Button from '../../Button'
import Input from '../../Input'

// Styles
import './AccountPersonDeliveryForm.scss'

interface IAccountPersonDeliveryFormProps {
  submitHandler: (e: FormEvent<HTMLFormElement>) => void
  toggleDeliveryChanging: () => void
  setCountry: (e: string) => void
  setCity: (e: string) => void
  setArea: (e: string) => void
  setAddress: (e: string) => void
  setMailindex: (e: string) => void
  isDeliveryChanging: boolean
  country: string
  city: string
  area: string
  address: string
  mailindex: string
  isLoading: boolean
}

const AccountPersonDeliveryForm: React.FC<IAccountPersonDeliveryFormProps> = ({
  submitHandler,
  isDeliveryChanging,
  toggleDeliveryChanging,
  country,
  city,
  area,
  address,
  mailindex,
  setCountry,
  setCity,
  setArea,
  setAddress,
  setMailindex,
  isLoading,
}) => {
  return (
    <form
      action=""
      onSubmit={submitHandler}
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
        <Input
          labelClass="account-settings-label"
          inputClass="account-settings-input"
          wrapperClass="input-group"
          labelName="СТРАНА"
          onChangeHandler={(e) => setCountry(e.target.value)}
          value={country}
          type="text"
        />
        <Input
          labelClass="account-settings-label"
          inputClass="account-settings-input"
          wrapperClass="input-group"
          labelName="ГОРОД"
          onChangeHandler={(e) => setCity(e.target.value)}
          value={city}
          type="text"
        />
        <Input
          labelClass="account-settings-label"
          inputClass="account-settings-input"
          wrapperClass="input-group"
          labelName="КРАЙ/ОБЛАСТЬ/РЕГИОН"
          onChangeHandler={(e) => setArea(e.target.value)}
          value={area}
          type="text"
        />
      </div>
      <div className="account-delivery-row">
        <Input
          labelClass="account-settings-label"
          inputClass="account-settings-input"
          wrapperClass="input-group"
          labelName="УЛИЦА, ДОМ, КВАРТИРА"
          onChangeHandler={(e) => setAddress(e.target.value)}
          value={address}
          type="text"
        />
        <Input
          labelClass="account-settings-label"
          inputClass="account-settings-input"
          wrapperClass="input-group"
          labelName="ПОЧТОВЫЙ ИНДЕКС"
          onChangeHandler={(e) => setMailindex(e.target.value)}
          value={mailindex}
          type="text"
        />
      </div>
      {isDeliveryChanging && (
        <Button
          className="save-account-settings-btn"
          disableDefaultStyles={true}
          isLoading={isLoading}
          loaderColor="white"
        >
          Сохранить изменения
        </Button>
      )}
    </form>
  )
}

export default AccountPersonDeliveryForm
