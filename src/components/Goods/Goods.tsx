// Libs
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Components
import GoodsItem from '../GoodsItem'

// Redux
import { FETCH_GOODS_REQUEST } from '../../store/goods/types'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'

// Styles
import './Goods.scss'

// Interfaces
import { ILink } from '../Navigation/links'
import { IProductItem } from '../../interfaces/product'

import links from '../Navigation/links'

const Goods: React.FC = () => {
  const goods = useSelector((state: RootStateOrAny) => state.goods.fetchedGoods)

  const [category, setCategory] = useState<string>('')

  const dispatch = useDispatch()
  const { categoryName }: any = useParams()

  useEffect(() => {
    dispatch({ type: FETCH_GOODS_REQUEST, linkurl: categoryName })

    const currentCategory = links.find(
      (link: ILink) => link.url === categoryName
    )?.category!

    setCategory(currentCategory)
  }, [categoryName, dispatch])

  return (
    <div className="goods-container">
      <h2 className="goods-category">{category}</h2>
      <div className="goods-row">
        {goods.map((item: IProductItem) => (
          <GoodsItem
            key={item._id}
            id={item._id!}
            imageUrl={item.imageUrl!}
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
