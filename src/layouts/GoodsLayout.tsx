// Libs
import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import classNames from 'classnames'

// Components
import Footer from '../components/Footer'
import Header from '../components/Header'

// Styles
import './layouts.scss'

// Interfaces
interface IGoodsLayoutProps {
  isProduct?: boolean
}

const GoodsLayout: React.FC<IGoodsLayoutProps> = ({ isProduct, children }) => {
  const { product } = useSelector(
    (store: RootStateOrAny) => store.product.product
  )

  return (
    <>
      <Header goodsLayoutHeader={true} isProduct={isProduct} />
      <div
        className={classNames('goods-default-page', {
          'goods-page-black': isProduct && product?.isBlack,
          'goods-page-white': isProduct && product?.isWhite,
        })}
      >
        {children}
      </div>
      <Footer />
    </>
  )
}

export default GoodsLayout
