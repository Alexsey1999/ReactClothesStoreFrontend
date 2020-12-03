// @ts-nocheck
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProductQuantity } from '../../../store/product/actions'

import './ProductQuantity.scss'

const ProductQuantity = () => {
  const productQuantity = useSelector((state) => state.product.productQuantity)
  const dispatch = useDispatch()

  const downProductQuantity = () => {
    if (productQuantity > 1) {
      dispatch(setProductQuantity(productQuantity - 1))
    }
  }

  const upProductQuantity = () => {
    if (productQuantity < 10) {
      dispatch(setProductQuantity(productQuantity + 1))
    }
  }

  return (
    <div className="quantity">
      <h4>Количество:</h4>
      <div className="quantity-wrapper">
        <button onClick={downProductQuantity} className="quantity-left-btn">
          <svg
            height="8pt"
            viewBox="0 -192 469.33333 469"
            width="8pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0" />
          </svg>
        </button>
        <div className="quantity-result">{productQuantity}</div>
        <button onClick={upProductQuantity} className="quantity-right-btn">
          <svg
            height="8pt"
            viewBox="0 0 448 448"
            width="8pt"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ProductQuantity
