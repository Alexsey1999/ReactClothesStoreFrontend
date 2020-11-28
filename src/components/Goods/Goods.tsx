// @ts-nocheck
import React from 'react'
import GoodsItem from '../GoodsItem'

import { useSelector } from 'react-redux'

import './Goods.scss'

const Goods = () => {
  const goods = useSelector((state) => state.goods.fetchedGoods)
  const category = useSelector((state) => state.categories.currentCategory)

  return (
    <div className="goods-container">
      <h2 className="goods-category">{category.linkName}</h2>
      <div className="goods-row">
        {goods.map((item) => (
          <GoodsItem
            key={item._id}
            id={item._id}
            imageUrl={item.imageUrl}
            price={item.price}
            name={item.name}
            category={item.category}
          />
        ))}
      </div>
    </div>
  )
}

export default Goods
