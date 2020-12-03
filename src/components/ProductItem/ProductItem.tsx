// @ts-nocheck
import React from 'react'
import classNames from 'classnames'

import './ProductItem.scss'

import { useSelector } from 'react-redux'

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

SwiperCore.use([Navigation])

const ProductItem = () => {
  const {
    product: {
      _id,
      name,
      price,
      swiperImages,
      isBlack,
      isWhite,
      category,
      deliveryInfo,
      description,
      sizes,
      sizeAndCare: { size, care },
    },
    recommendations,
  } = useSelector((store) => store.product.product)

  return (
    <div
      className={classNames('product-wrapper', {
        'product-white': isWhite,
        'product-black': isBlack,
      })}
    >
      <div className="product-container">
        <div className="product-item">
          <h2 className="product-item-title">{name}</h2>
          <div className="product-item-row">
            <div className="product-item-swiper">
              <ProductSwiper
                swiperImages={swiperImages}
                name={name}
                isBlack={isBlack}
              />
            </div>
            <ProductInfo
              price={price}
              deliveryInfo={deliveryInfo}
              description={description}
              category={category}
              sizes={sizes}
              size={size}
              care={care}
              name={name}
              isBlack={isBlack}
              isWhite={isWhite}
            />
          </div>
        </div>

        <div className="recomendations">
          <div className="recomendations-title">
            Рекомендуем к <span>покупке</span>
          </div>

          <RecommendationSlider _id={_id} recommendations={recommendations} />
        </div>
      </div>
    </div>
  )
}

export default ProductItem
