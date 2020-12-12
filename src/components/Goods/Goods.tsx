// @ts-nocheck
import React from 'react'
import GoodsItem from '../GoodsItem'
import { FETCH_GOODS_REQUEST } from '../../store/goods/actions'
import { setCurrentCategory } from '../../store/categories/actions'
import links from '../Navigation/links'

import { useSelector, useDispatch } from 'react-redux'

import './Goods.scss'

import { useParams } from 'react-router-dom'

const Goods = () => {
  const goods = useSelector((state) => state.goods.fetchedGoods)
  // const category = useSelector((state) => state.categories.currentCategory)

  const [category, setCategory] = React.useState('')

  const dispatch = useDispatch()

  const { categoryName } = useParams()

  React.useEffect(() => {
    dispatch({ type: FETCH_GOODS_REQUEST, linkurl: categoryName })
    // dispatch(
    //   setCurrentCategory({ linkName: 'Футболкиыы', linkurl: categoryName })
    // )
    setCategory(links.find((link) => link.url === categoryName).category)
  }, [categoryName])

  return (
    <div className="goods-container">
      <h2 className="goods-category">{category}</h2>
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
