// @ts-nocheck
// Libs
import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'

// Components
import Footer from '../components/Footer'
import Header from '../components/Header'

import './layouts.scss'

const GoodsLayout: React.FC<ReactNode> = ({ children }) => {
  const { isBlack, isWhite } = useSelector((store) => store.product.product)

  return (
    <>
      <Header goodsLayoutHeader={true} />
      <div
        className={classNames({
          'goods-page-black': isBlack,
          'goods-page-white': isWhite,
        })}
      >
        {children}
      </div>
      <Footer />
    </>
  )
}

export default GoodsLayout
