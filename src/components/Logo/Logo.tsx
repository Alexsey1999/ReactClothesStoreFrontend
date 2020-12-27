// Libs
import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

// Styles
import './Logo.scss'

// Images
import logo from '../../assets/images/logo.png'

interface ILogoProps {
  headerLogo?: boolean
  footerLogo?: boolean
}

const Logo: React.FC<ILogoProps> = ({ headerLogo, footerLogo }) => {
  return (
    <Link
      to="/"
      className={classNames({
        'logo-in-header': headerLogo,
        'logo-in-footer': footerLogo,
      })}
    >
      <img src={logo} alt="Магазин одежды - логотип" />
    </Link>
  )
}

export default Logo
