// Libs
import React from 'react'
import ReactModal from 'react-modal'

// Components
import Socials from '../Socials'
import SignInModal from '../SignInModal'
import SignUpModal from '../SignUpModal'
import PasswordRecovery from '../PasswordRecovery'
import Cart from '../Cart'
import BurgerMenu from '../BurgerMenu'
import Navigation from '../Navigation'
import Logo from '../Logo'
import Button from '../Button'

// Styles
import './Header.scss'
import 'react-responsive-modal/styles.css'

const Header: React.FC = () => {
  const [isSignInOpened, setIsSignInOpened] = React.useState(false)

  const [isSignUpOpened, setIsSignUpOpened] = React.useState(false)

  const [
    isPasswordRecoveryOpened,
    setIsPasswordRecoveryOpened,
  ] = React.useState(false)

  const [isShoppingCartOpened, setIsShoppingCartOpened] = React.useState(false)

  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = React.useState(false)

  // Open Sign-in modal window
  const openSignInModal = () => {
    setIsSignUpOpened(false)
    setIsPasswordRecoveryOpened(false)
    setIsSignInOpened(true)
  }

  // Close Sign-in modal window
  const closeSignInModal = () => {
    setIsSignInOpened(false)
  }

  // Open Sign-up modal window
  const openSignUpModal = () => {
    setIsSignInOpened(false)
    setIsSignUpOpened(true)
  }

  // Close Sign-up modal window
  const closeSignUpModal = () => {
    // setSignInModalOpened(false)
    setIsSignUpOpened(false)
  }

  // Open Password-recovery modal window
  const openPasswordRecoveryModal = () => {
    setIsSignInOpened(false)
    setIsPasswordRecoveryOpened(true)
  }

  // Close Password-recovery modal window
  const closePasswordRecoveryModal = () => {
    setIsPasswordRecoveryOpened(false)
    // setIsSignInOpened(true)
  }

  // Open Shopping-cart
  const openShoppingCart = () => {
    setIsShoppingCartOpened(true)
  }

  // Close Shopping-cart
  const closeShoppingCart = () => {
    setIsShoppingCartOpened(false)
  }

  // Open Burger-menu
  const openBurgerMenu = () => {
    setIsBurgerMenuOpened(true)
  }

  // Close Burger-menu
  const closeBurgerMenu = () => {
    setIsBurgerMenuOpened(false)
  }

  React.useEffect(() => {
    ReactModal.setAppElement('body')
  }, [])

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-top">
            <div className="header-row">
              <Socials />
              <Logo headerLogo={true} />
              <div className="account-and-cart">
                <svg
                  onClick={openSignInModal}
                  className="account-icon"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.3104 25.5078C25.2564 22.0511 24.1795 18.908 22.2648 16.6324C20.3613 14.3706 17.7815 13.125 15 13.125C12.2184 13.125 9.63866 14.3706 7.73513 16.6324C5.82228 18.9056 4.74608 22.0443 4.68983 25.4967C5.77147 26.0385 10.2474 28.125 15 28.125C20.1391 28.125 24.3073 26.0508 25.3104 25.5078Z"
                    fill="#FCF1F1"
                  />
                  <path
                    d="M15 12.1875C17.8477 12.1875 20.1562 9.87897 20.1562 7.03125C20.1562 4.18353 17.8477 1.875 15 1.875C12.1523 1.875 9.84375 4.18353 9.84375 7.03125C9.84375 9.87897 12.1523 12.1875 15 12.1875Z"
                    fill="#FCF1F1"
                  />
                </svg>
                <svg
                  onClick={openShoppingCart}
                  className="cart-icon"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.66568 19.3948H9.66705C9.6682 19.3948 9.66934 19.3945 9.67049 19.3945H25.6055C25.9978 19.3945 26.3427 19.1343 26.4505 18.7571L29.9661 6.45241C30.0419 6.18713 29.9888 5.90195 29.8228 5.68176C29.6567 5.46158 29.3969 5.33203 29.1211 5.33203H7.6387L7.01042 2.50465C6.92093 2.10251 6.56433 1.81641 6.15234 1.81641H0.878906C0.393448 1.81641 0 2.20985 0 2.69531C0 3.18077 0.393448 3.57422 0.878906 3.57422H5.44739C5.55862 4.07524 8.45398 17.1046 8.62061 17.8542C7.68654 18.2602 7.03125 19.1915 7.03125 20.2734C7.03125 21.7273 8.21411 22.9102 9.66797 22.9102H25.6055C26.0909 22.9102 26.4844 22.5167 26.4844 22.0312C26.4844 21.5458 26.0909 21.1523 25.6055 21.1523H9.66797C9.18343 21.1523 8.78906 20.758 8.78906 20.2734C8.78906 19.7896 9.18205 19.3959 9.66568 19.3948ZM27.9559 7.08984L24.9424 17.6367H10.3729L8.02917 7.08984H27.9559Z"
                    fill="#FCF1F1"
                  />
                  <path
                    d="M8.78906 25.5469C8.78906 27.0007 9.97192 28.1836 11.4258 28.1836C12.8796 28.1836 14.0625 27.0007 14.0625 25.5469C14.0625 24.093 12.8796 22.9102 11.4258 22.9102C9.97192 22.9102 8.78906 24.093 8.78906 25.5469ZM11.4258 24.668C11.9103 24.668 12.3047 25.0623 12.3047 25.5469C12.3047 26.0314 11.9103 26.4258 11.4258 26.4258C10.9412 26.4258 10.5469 26.0314 10.5469 25.5469C10.5469 25.0623 10.9412 24.668 11.4258 24.668Z"
                    fill="#FCF1F1"
                  />
                  <path
                    d="M21.2109 25.5469C21.2109 27.0007 22.3938 28.1836 23.8477 28.1836C25.3015 28.1836 26.4844 27.0007 26.4844 25.5469C26.4844 24.093 25.3015 22.9102 23.8477 22.9102C22.3938 22.9102 21.2109 24.093 21.2109 25.5469ZM23.8477 24.668C24.3322 24.668 24.7266 25.0623 24.7266 25.5469C24.7266 26.0314 24.3322 26.4258 23.8477 26.4258C23.3631 26.4258 22.9688 26.0314 22.9688 25.5469C22.9688 25.0623 23.3631 24.668 23.8477 24.668Z"
                    fill="#FCF1F1"
                  />
                </svg>
                <Button
                  onClick={openBurgerMenu}
                  className="burger-btn"
                  disableDefaultStyles={true}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </Button>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <Navigation />
            <BurgerMenu
              isBurgerMenuOpened={isBurgerMenuOpened}
              closeBurgerMenu={closeBurgerMenu}
            />
          </div>
        </div>
        <div className="pink-line"></div>
      </header>

      <SignInModal
        openSignUpModal={openSignUpModal}
        openPasswordRecoveryModal={openPasswordRecoveryModal}
        isSignInOpened={isSignInOpened}
        closeSignInModal={closeSignInModal}
      />

      <SignUpModal
        openSignInModal={openSignInModal}
        isSignUpOpened={isSignUpOpened}
        closeSignUpModal={closeSignUpModal}
      />

      <PasswordRecovery
        openSignInModal={openSignInModal}
        isPasswordRecoveryOpened={isPasswordRecoveryOpened}
        closePasswordRecoveryModal={closePasswordRecoveryModal}
      />

      <Cart
        closeShoppingCart={closeShoppingCart}
        isShoppingCartOpened={isShoppingCartOpened}
      />
    </>
  )
}

export default Header
