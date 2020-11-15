// @ts-nocheck

import React from 'react'
import Button from '../Button'

import './PasswordRecovery.scss'

const PasswordRecovery = ({ openSignInModal }) => {
  return (
    <div className="password-recovery">
      <div className="password-recovery-content">
        <h4 className="password-recovery-title">Восстановление пароля</h4>
        <div className="password-recovery-descr">
          Введите e-mail и мы пришлём ссылку для восстановления пароля.
        </div>
        <form action="">
          <div className="password-recovery-field">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2422 2.38281H1.75781C0.789766 2.38281 0 3.17172 0 4.14062V15.8594C0 16.825 0.78625 17.6172 1.75781 17.6172H18.2422C19.2078 17.6172 20 16.8309 20 15.8594V4.14062C20 3.175 19.2138 2.38281 18.2422 2.38281ZM17.9995 3.55469L10.0373 11.5169L2.00621 3.55469H17.9995ZM1.17188 15.6167V4.3777L6.81559 9.97301L1.17188 15.6167ZM2.00051 16.4453L7.64777 10.798L9.62656 12.7598C9.85563 12.987 10.2253 12.9862 10.4534 12.758L12.3828 10.8286L17.9995 16.4453H2.00051ZM18.8281 15.6167L13.2114 10L18.8281 4.38328V15.6167Z"
                fill="#5A5A5A"
              />
            </svg>
            <input type="email" required placeholder="Почта" />
          </div>
          <div className="password-recovery-row">
            <Button className="password-recovery-btn">
              Восстановить пароль
            </Button>
            <span
              onClick={openSignInModal}
              className="password-recovery-cancel"
            >
              Отмена
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PasswordRecovery
