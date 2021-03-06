// Libs
import React, { FormEvent, useState } from 'react'
import axios from '../../axios'

// Components
import Button from '../Button'
import { Modal } from 'react-responsive-modal'

// Redux
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import {
  openSuccessSignUp,
  closeSignUp,
  openSignIn,
} from '../../store/modals/actions'
import { setJwt, setUser } from '../../store/users/actions'

// Styles
import './SignUpModal.scss'

// Utils
import { notify } from '../../utils/notify'
import { IErrorExpressValidator } from '../../interfaces/error'

const SignUpModal: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatPassword, setRepeatPassword] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { isSignUpOpened } = useSelector(
    (state: RootStateOrAny) => state.modals
  )

  const dispatch = useDispatch()

  const registerUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      const response = await axios({
        method: 'post',
        url: '/user/register',
        data: {
          email,
          password,
          repeatPassword,
        },
        withCredentials: true,
      })

      dispatch(setJwt(response.data.token))
      localStorage.setItem('jwt', response.data.token)

      dispatch(setUser(response.data.user))

      dispatch(openSuccessSignUp())
      dispatch(closeSignUp())
    } catch (error) {
      setIsLoading(false)
      console.log(error.response.data.errors)

      error.response.data.errors.forEach((error: IErrorExpressValidator) => {
        notify(error.msg)
      })
    }
  }

  const clearSignUpState = () => {
    setEmail('')
    setPassword('')
    setRepeatPassword('')
  }

  const backToSignIn = () => {
    dispatch(openSignIn())
    clearSignUpState()
  }

  const closeSignUpModal = () => {
    dispatch(closeSignUp())
    clearSignUpState()
  }

  return (
    <Modal open={isSignUpOpened} onClose={closeSignUpModal}>
      <div className="signUp">
        <div className="signUp-content">
          <div className="signUp-header">
            <h3 className="signUp-title">Регистрация</h3>
          </div>

          <div className="signUp-main">
            <form action="" onSubmit={registerUser} method="post">
              <div className="signUp-fields">
                <div className="signUp-field">
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
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    name="email"
                    placeholder="Почта"
                    required
                  />
                </div>
                <div className="signUp-field">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
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
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    required
                  />
                </div>

                <div className="signUp-field">
                  <input
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    value={repeatPassword}
                    className="repeat-password"
                    placeholder="Подтвердите пароль"
                    name="repeatPassword"
                    type="password"
                    required
                  />
                </div>
              </div>

              <div className="btn-wrapper">
                <Button
                  className="signUp-btn"
                  disableDefaultStyles={true}
                  isLoading={isLoading}
                  loaderColor="white"
                >
                  Зарегестрироваться
                </Button>
              </div>
            </form>

            <div className="signUp-through-socials">
              <h4 className="signUp-through-title">
                Зарегестрироваться через:
              </h4>
              <div className="google-and-vk">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.875 13.5V17.25H25.725C24.825 22.5 20.625 26.25 15.375 26.25C9.225 26.25 4.125 21.15 4.125 15C4.125 8.85 9.225 3.75 15.375 3.75C18.525 3.75 21.225 5.1 23.175 7.2L25.875 4.5C23.175 1.8 19.575 0 15.375 0C7.125 0 0.375 6.75 0.375 15C0.375 23.25 7.125 30 15.375 30C23.625 30 29.625 23.25 29.625 15V13.5H16.875Z"
                    fill="black"
                  />
                </svg>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 0C6.71601 0 0 6.7157 0 15C0 23.2843 6.71601 30 15 30C23.284 30 30 23.2843 30 15C30 6.7157 23.284 0 15 0ZM22.6088 16.6223C23.3079 17.3052 24.0476 17.9478 24.6752 18.7013C24.9532 19.0346 25.2153 19.3792 25.4148 19.7669C25.6996 20.3196 25.4425 20.9257 24.9477 20.9586L21.8747 20.958C21.081 21.0236 20.4494 20.7035 19.9169 20.1609C19.4919 19.7285 19.0975 19.2666 18.6881 18.8194C18.5208 18.6359 18.3447 18.4631 18.1347 18.3272C17.7158 18.0546 17.3518 18.1381 17.1118 18.5758C16.8672 19.0211 16.8114 19.5146 16.788 20.0102C16.7546 20.7348 16.5361 20.9242 15.809 20.9583C14.2554 21.031 12.7814 20.7953 11.4114 20.0121C10.2028 19.3212 9.26731 18.3462 8.45217 17.2423C6.86486 15.0902 5.64921 12.7283 4.55693 10.2985C4.3111 9.7513 4.49095 9.45852 5.09463 9.44716C6.0976 9.42783 7.10056 9.43028 8.10353 9.44624C8.51171 9.45268 8.78179 9.68624 8.93862 10.0714C9.48061 11.4049 10.1451 12.6737 10.9777 13.8503C11.1996 14.1637 11.4261 14.4761 11.7486 14.6974C12.1047 14.9417 12.376 14.861 12.5438 14.4635C12.6513 14.2109 12.6976 13.9409 12.7209 13.6702C12.8007 12.743 12.8102 11.8162 12.6721 10.8927C12.5862 10.3148 12.2612 9.94158 11.6851 9.83233C11.3917 9.77678 11.4347 9.66813 11.5774 9.50056C11.8251 9.21084 12.0571 9.03161 12.5208 9.03161L15.9928 9.031C16.5401 9.13841 16.6628 9.38394 16.7371 9.93514L16.7402 13.7936C16.7337 14.0069 16.8473 14.6391 17.2303 14.7787C17.5372 14.88 17.7397 14.6339 17.9233 14.4396C18.7559 13.556 19.3492 12.5131 19.8804 11.4338C20.1149 10.9577 20.3171 10.4652 20.5136 9.97166C20.6596 9.60675 20.8868 9.42721 21.2986 9.43335L24.642 9.43734C24.7406 9.43734 24.8406 9.43826 24.9382 9.45514C25.5017 9.55151 25.6561 9.79396 25.4817 10.3436C25.2074 11.2073 24.6743 11.9266 24.1531 12.6479C23.5946 13.4201 22.9989 14.1652 22.4458 14.9408C21.9376 15.6497 21.9778 16.0066 22.6088 16.6223Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>

            <div className="exists-account">
              <span>Уже есть аккаунт?</span>
              <span className="sign-in-title" onClick={backToSignIn}>
                Войти
              </span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default SignUpModal
