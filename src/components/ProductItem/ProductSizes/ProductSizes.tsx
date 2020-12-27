// Libs
import React from 'react'
import classNames from 'classnames'

// Styles
import './ProductSizes.scss'

// Interfaces
import { IProductSize } from '../../../interfaces/product'

interface IProductSizesProps {
  setProductSizeIndex: (productSizeIndex: number) => void
  sizes: IProductSize[]
  productSizeIndex: number
}

const ProductSizes: React.FC<IProductSizesProps> = ({
  sizes,
  productSizeIndex,
  setProductSizeIndex,
}) => {
  const chooseSize = (index: number) => {
    setProductSizeIndex(index)
  }

  const chooseSizeParse = (size: IProductSize, index: number) => (
    <li
      key={size.size! + index}
      onClick={() => chooseSize(index)}
      className={classNames('size-item', {
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
