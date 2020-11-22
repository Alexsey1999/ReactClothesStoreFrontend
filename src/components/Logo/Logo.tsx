// Libs
import React from 'react'
import classNames from 'classnames'

// Styles
import './Logo.scss'

// Images
import logo from '../../assets/images/logo.png'

//  Logo props interface
interface ILogoProps {
  headerLogo?: boolean
  footerLogo?: boolean
}

const Logo: React.FC<ILogoProps> = ({ headerLogo, footerLogo }) => {
  return (
    <a
      href="/"
      className={classNames({
        'logo-in-header': headerLogo,
        'logo-in-footer': footerLogo,
      })}
    >
      <img src={logo} alt="Магазин одежды - логотип" />
    </a>
  )
}

export default Logo
