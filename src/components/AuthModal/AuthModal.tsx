// @ts-nocheck
import React from 'react'
import Button from '../Button'

import './AuthModal.scss'

const AuthModal = ({ title, isPinkLine }) => {
  return (
    <div className="auth">
      <div className="auth-content">
        <div className="auth-header">
          <h3 className="auth-title">{title}</h3>

          {isPinkLine && <div className="pinkLine"></div>}
        </div>

        <div className="auth-main">
          <form action="">
            <div className="auth-fields">
              <div className="auth-field">
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
                <input type="email" placeholder="Почта" required />
              </div>
              <div className="auth-field">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M15.625 20H4.375C3.34167 20 2.5 19.1592 2.5 18.125V9.375C2.5 8.34083 3.34167 7.5 4.375 7.5H15.625C16.6583 7.5 17.5 8.34083 17.5 9.375V18.125C17.5 19.1592 16.6583 20 15.625 20ZM4.375 8.75C4.03083 8.75 3.75 9.03 3.75 9.375V18.125C3.75 18.47 4.03083 18.75 4.375 18.75H15.625C15.9692 18.75 16.25 18.47 16.25 18.125V9.375C16.25 9.03 15.9692 8.75 15.625 8.75H4.375Z"
                      fill="#5A5A5A"
                    />
                    <path
                      d="M14.375 8.75C14.03 8.75 13.75 8.47 13.75 8.125V5C13.75 2.9325 12.0675 1.25 10 1.25C7.9325 1.25 6.25 2.9325 6.25 5V8.125C6.25 8.47 5.97 8.75 5.625 8.75C5.28 8.75 5 8.47 5 8.125V5C5 2.2425 7.2425 0 10 0C12.7575 0 15 2.2425 15 5V8.125C15 8.47 14.72 8.75 14.375 8.75Z"
                      fill="#5A5A5A"
                    />
                    <path
                      d="M10.0002 14.1666C9.081 14.1666 8.3335 13.4191 8.3335 12.5C8.3335 11.5808 9.081 10.8333 10.0002 10.8333C10.9193 10.8333 11.6668 11.5808 11.6668 12.5C11.6668 13.4191 10.9193 14.1666 10.0002 14.1666ZM10.0002 12.0833C9.771 12.0833 9.5835 12.27 9.5835 12.5C9.5835 12.73 9.771 12.9166 10.0002 12.9166C10.2293 12.9166 10.4168 12.73 10.4168 12.5C10.4168 12.27 10.2293 12.0833 10.0002 12.0833Z"
                      fill="#5A5A5A"
                    />
                    <path
                      d="M10 16.6667C9.655 16.6667 9.375 16.3867 9.375 16.0417V13.75C9.375 13.405 9.655 13.125 10 13.125C10.345 13.125 10.625 13.405 10.625 13.75V16.0417C10.625 16.3867 10.345 16.6667 10 16.6667Z"
                      fill="#5A5A5A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <input type="password" placeholder="Пароль" required />
              </div>
            </div>
            <div className="auth-row">
              <div className="rememberme">
                <input
                  className="custom-checkbox"
                  id="remember"
                  type="checkbox"
                />
                <label htmlFor="remember">Запомнить</label>
              </div>
              <div className="forgot-password">Забыли пароль?</div>
            </div>

            <div className="btn-wrapper">
              <Button className="sign-in">Войти</Button>
            </div>
          </form>

          <div className="signIn-through-socials"></div>

          <div className="auth-register">Зарегестрироваться</div>
        </div>
      </div>
    </div>
  )
}

export default AuthModal
