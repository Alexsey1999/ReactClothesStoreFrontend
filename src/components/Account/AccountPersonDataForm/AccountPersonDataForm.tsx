// Libs
import React, { FormEvent } from 'react'
import classNames from 'classnames'

// Components
import Input from '../../Input'
import Button from '../../Button'

// Styles
import './AccountPersonDataForm.scss'

interface IAccountPersonDataFormProps {
  submitHandler: (e: FormEvent<HTMLFormElement>) => void
  toggleChanging: () => void
  setName: (e: string) => void
  setSurname: (e: string) => void
  setThirdname: (e: string) => void
  setPhone: (e: string) => void
  isChanging: boolean
  name: string
  surname: string
  thirdname: string
  phone: string
  isLoading: boolean
}

const AccountPersonDataForm: React.FC<IAccountPersonDataFormProps> = ({
  submitHandler,
  isChanging,
  toggleChanging,
  name,
  surname,
  thirdname,
  phone,
  setName,
  setSurname,
  setThirdname,
  setPhone,
  isLoading,
}) => {
  return (
    <form
      action="/"
      onSubmit={submitHandler}
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
        <Input
          labelClass="account-settings-label"
          inputClass="account-settings-input"
          wrapperClass="input-group"
          labelName="ИМЯ"
          onChangeHandler={(e) => setName(e.target.value)}
          value={name}
          type="text"
        />
        <Input
          labelClass="account-settings-label"
          inputClass="account-settings-input"
          wrapperClass="input-group"
          labelName="ФАМИЛИЯ"
          onChangeHandler={(e) => setSurname(e.target.value)}
          value={surname}
          type="text"
        />
        <Input
          labelClass="account-settings-label"
          inputClass="account-settings-input"
          wrapperClass="input-group"
          labelName="ОТЧЕСТВО"
          onChangeHandler={(e) => setThirdname(e.target.value)}
          value={thirdname}
          type="text"
        />
      </div>

      <Input
        labelClass="account-settings-label"
        inputClass="account-settings-input"
        wrapperClass="input-group phone-group"
        labelName="ТЕЛЕФОН"
        onChangeHandler={(e) => setPhone(e.target.value)}
        value={phone}
        type="text"
      />

      {isChanging && (
        <Button
          className="save-account-settings-btn"
          disableDefaultStyles={true}
          loaderColor="white"
          isLoading={isLoading}
        >
          Сохранить изменения
        </Button>
      )}
    </form>
  )
}

export default AccountPersonDataForm
