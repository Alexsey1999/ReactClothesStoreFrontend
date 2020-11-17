// Libs
import React from 'react'
import classNames from 'classnames'

// Styles
import './Button.scss'

// Button props interface
interface IButtonProps {
  className: string
  onClick?: () => void
  disableDefaultStyles?: boolean
}

const Button: React.FC<IButtonProps> = ({
  children,
  className,
  onClick,
  disableDefaultStyles,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        { 'default-btn': !disableDefaultStyles },
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
