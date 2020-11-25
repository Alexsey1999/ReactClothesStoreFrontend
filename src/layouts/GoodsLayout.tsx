// Libs
import React, { ReactNode } from 'react'

// Components
import Footer from '../components/Footer'
import Header from '../components/Header'

import './layouts.scss'

const GoodsLayout: React.FC<ReactNode> = ({ children }) => {
  return (
    <>
      <Header goodsLayoutHeader={true} />
      <div className="goods-page">{children}</div>
      <Footer />
    </>
  )
}

export default GoodsLayout
