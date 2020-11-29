// @ts-nocheck
// Libs
import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'

// Components
import Footer from '../components/Footer'
import Header from '../components/Header'

import './layouts.scss'

const GoodsLayout: React.FC<ReactNode> = ({ isProduct, children }) => {
  const { isBlack, isWhite } = useSelector((store) => store.product.product)

  return (
    <>
      <Header goodsLayoutHeader={true} isProduct={isProduct} />
      <div
        className={classNames('goods-default-page', {
          'goods-page-black': isProduct && isBlack,
          'goods-page-white': isProduct && isWhite,
        })}
      >
        {children}
      </div>
      <Footer />
    </>
  )
}

export default GoodsLayout
