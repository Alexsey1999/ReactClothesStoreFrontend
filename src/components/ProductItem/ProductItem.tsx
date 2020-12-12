// @ts-nocheck
import React from 'react'
import classNames from 'classnames'

import './ProductItem.scss'

import { useSelector, useDispatch } from 'react-redux'
import { useParams, useLocation, useRouteMatch } from 'react-router-dom'

import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import Button from '../Button'
import SizeModal from '../SizeModal'
import CareModal from '../CareModal'
import RecommendationModal from '../RecommendationModal'
import ProductSwiper from './ProductSwiper'
import ProductSizes from './ProductSizes'
import ProductQuantity from './ProductQuantity'
import SizeAndCare from './SizeAndCare'
import ProductInfo from './ProductInfo'
import RecommendationSlider from './RecommendationSlider'
import queryString from 'query-string'
import { PRODUCT_ITEM_REQUEST } from '../../store/product/actions'

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
            <div className="product-item-swiper">
              <ProductSwiper
                swiperImages={product?.swiperImages}
                name={product?.name}
                isBlack={product?.isBlack}
              />
            </div>
            <ProductInfo
              productId={productId}
              price={product?.price}
              deliveryInfo={product?.deliveryInfo}
              description={product?.description}
              category={product?.category}
              sizes={product?.sizes}
              size={product?.sizeAndCare.size}
              care={product?.sizeAndCare.care}
              name={product?.name}
              isBlack={product?.isBlack}
              isWhite={product?.isWhite}
            />
          </div>
        </div>

        <div className="recomendations">
          <div className="recomendations-title">
            Рекомендуем к <span>покупке</span>
          </div>

          {/* {recommendations && (
            <RecommendationSlider
              _id={product?._id}
              recommendations={recommendations}
            />
          )} */}
        </div>
      </div>
    </div>
  )
}

export default ProductItem
