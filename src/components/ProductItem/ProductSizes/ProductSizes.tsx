// @ts-nocheck
import React from 'react'
import classNames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { setProductSize } from '../../../store/product/actions'

import './ProductSizes.scss'

const ProductSizes = ({ sizes }) => {
  const productSize = useSelector((state) => state.product.productSize)
  const dispatch = useDispatch()

  const chooseSizeParse = (size, index) => (
    <li
      key={size + index}
      onClick={() => dispatch(setProductSize(size))}
      className={classNames('size-item', {
        active: size === productSize,
      })}
    >
      {size}
    </li>
  )

  return (
    <div className="product-size">
      <h4>Выберите размер:</h4>
      <ul className="size-list">{sizes && sizes.map(chooseSizeParse)}</ul>
    </div>
  )
}

export default ProductSizes
