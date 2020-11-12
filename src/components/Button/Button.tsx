// @ts-nocheck
import React from 'react'
import classNames from 'classnames'

import './Button.scss'

const Button = ({ children, className }) => {
  return (
    <button className={classNames('default-btn', className)}>{children}</button>
  )
}

export default Button
