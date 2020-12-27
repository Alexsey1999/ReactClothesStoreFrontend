// Libs
import React from 'react'
import classNames from 'classnames'

// Components
import Loader from '../Loader'

// Styles
import './Button.scss'

interface IButtonProps {
  onClick?: () => void
  className?: string
  disableDefaultStyles?: boolean
  scrollTo?: string
  loaderColor?: string
  isLoading?: boolean
}

const Button: React.FC<IButtonProps> = ({
  children,
  className,
  onClick,
  disableDefaultStyles,
  scrollTo,
  loaderColor,
  isLoading,
}) => {
  return (
    <>
      {scrollTo ? (
        <a href={scrollTo}>
          <button
            className={classNames(
              { 'default-btn': !disableDefaultStyles },
              className
            )}
          >
            {children}
          </button>
        </a>
      ) : (
        <button
          onClick={onClick}
          className={classNames(
            { 'default-btn': !disableDefaultStyles },
            className
          )}
        >
          {isLoading ? <Loader color={loaderColor} /> : children}
        </button>
      )}
    </>
  )
}

export default Button
