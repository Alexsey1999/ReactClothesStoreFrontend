// @ts-nocheck
import React from 'react'
import Button from '../Button'
import classNames from 'classnames'

import './Account.scss'

const Account = () => {
  const [isChanging, setIsChanging] = React.useState(false)
  const enableChanging = () => {
    setIsChanging((prevVal) => !prevVal)
  }

  return (
    <div className="account">
      <div className="account-container">
        <div className="account-content">
          <h4 className="account-title">Мой аккаунт</h4>

          <div className="account-row">
            <div className="account-menu">
              <div className="account-menu-block">
                {/* <div className="account-menu-box">

                </div> */}
                <ul>
                  <li className="active">
                    <a href="">Личные данные</a>
                  </li>
                  <li>
                    <a href="">Мои заказы</a>
                  </li>
                </ul>
                <Button className="account-logout" disableDefaultStyles={true}>
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
                  <span className="change" onClick={enableChanging}>
                    {isChanging ? 'Отменить' : 'Изменить'}
                  </span>
                </header>
                <div className="personal-data-row">
                  <div className="input-group">
                    <label htmlFor="name">ИМЯ</label>
                    <input id="name" type="text" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
