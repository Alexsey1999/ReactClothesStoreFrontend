// @ts-nocheck
import React from 'react'
import classNames from 'classnames'

import './ProductItem.scss'

import { useSelector, useDispatch } from 'react-redux'
import RecommendationSlider from '../ProductItem/RecommendationSlider'

import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper.scss'
import ProductSwiper from './ProductSwiper'
import ProductInfo from './ProductInfo'
import queryString from 'query-string'
import {
  PRODUCT_ITEM_REQUEST,
  removeProductItem,
} from '../../store/product/actions'

SwiperCore.use([Navigation])

const ProductItem = (props) => {
  const { product, recommendations } = useSelector(
    (store) => store.product.product
  )
  const dispatch = useDispatch()

  const productId = props.match.params.id
  const { category: productCategory } = queryString.parse(
    window.location.search
  )
  React.useEffect(() => {
    dispatch({ type: PRODUCT_ITEM_REQUEST, productId, productCategory })

    return () => {
      dispatch(removeProductItem())
    }
  }, [productId, productCategory])

  return (
    <div
      className={classNames('product-wrapper', {
        'product-white': product?.isWhite,
        'product-black': product?.isBlack,
      })}
    >
      <div className="product-container">
        <div className="product-item">
          <h2 className="product-item-title">{product?.name}</h2>
          <div className="product-item-row">
            {product?.swiperImages.length ? (
              <div className="product-item-swiper">
                <ProductSwiper
                  swiperImages={product?.swiperImages}
                  name={product?.name}
                  isBlack={product?.isBlack}
                />
              </div>
            ) : (
              <div className="product-image">
                <img src={product?.imageUrl} />
              </div>
            )}

            <ProductInfo
              productId={productId}
              price={product?.price || 0}
              deliveryInfo={product?.deliveryInfo || ''}
              description={product?.description || []}
              category={product?.category || ''}
              sizes={product?.sizes || []}
              size={product?.sizeAndCare?.size || []}
              care={product?.sizeAndCare?.care || []}
              name={product?.name || ''}
              isBlack={product?.isBlack || false}
              isWhite={product?.isWhite || false}
            />
          </div>
        </div>

        <div className="recomendations">
          <div className="recomendations-title">
            Рекомендуем к <span>покупке</span>
          </div>

          {recommendations && (
            <RecommendationSlider
              _id={product?._id}
              recommendations={recommendations}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductItem
