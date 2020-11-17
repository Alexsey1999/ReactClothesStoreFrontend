// Libs
import React from 'react'

// Styles
import './Logo.scss'

// Images
import logo from '../../assets/images/logo.png'

const Logo = () => {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="Магазин одежды - логотип" />
    </a>
  )
}

export default Logo
