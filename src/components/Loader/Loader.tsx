// Libs
import React from 'react'
import classNames from 'classnames'

// Styles
import './Loader.scss'

interface ILoaderProps {
  color: string | undefined
}

const Loader: React.FC<ILoaderProps> = ({ color }) => {
  return <div className={classNames('loader', color)} style={{}}></div>
}

export default Loader
