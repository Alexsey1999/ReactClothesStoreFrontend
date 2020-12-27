// Libs
import React from 'react'
import FooterMenu from '../FooterMenu'

// Components
import Logo from '../Logo'
import Socials from '../Socials'

// Styles
import './Footer.scss'

// Images
import mailIcon from '../../assets/icons/envelope.svg'
import locationIcon from '../../assets/icons/location.svg'
import visaIcon from '../../assets/images/visa.png'
import masterCardIcon from '../../assets/images/mastercard.png'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-logo-and-socials">
            <Logo footerLogo={true} />
            <Socials inFooter={true} />
          </div>
          <div className="footer-menu">
            <FooterMenu />
          </div>
          <div className="footer-contacts-and-payment">
            <div className="footer-contacts">
              <div className="contacts-title">Контакты:</div>
              <div className="e-mail">
                <a href="mailto:loremipsum42@gmail.com">
                  <img src={mailIcon} alt="" />
                  <span>loremipsum42@gmail.com</span>
                </a>
              </div>
              <div className="address">
                <img src={locationIcon} alt="" />
                <span>г.Москва, ул.Ленина, д18</span>
              </div>
            </div>

            <div className="footer-payment">
              <div className="footer-payment-title">Мы принимаем:</div>
              <div className="payments">
                <img src={visaIcon} alt="visa" />
                <img src={masterCardIcon} alt="mastercard" />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">© Магазин одежды, 2020</div>
      </div>
    </footer>
  )
}

export default Footer
