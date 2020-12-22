// @ts-nocheck
import React from 'react'
import classNames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { setProductSize } from '../../../store/product/actions'

import './ProductSizes.scss'

const ProductSizes = ({ sizes, productSizeIndex, setProductSizeIndex }) => {
  // const productSize = useSelector((state) => state.product.productSize)

  const dispatch = useDispatch()

  const chooseSize = (size, index) => {
    // dispatch(setProductSize({ ...size, sizeIndex: index }))
    setProductSizeIndex(index)
  }

  const chooseSizeParse = (size, index) => (
    <li
      key={size.size + index}
      onClick={() => chooseSize(size, index)}
      className={classNames('size-item', {
        // active: index === productSize.sizeIndex,
        active: index === productSizeIndex,
      })}
    >
      {size.size}
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
