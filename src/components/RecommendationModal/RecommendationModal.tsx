// @ts-nocheck
import React from 'react'
import { Modal } from 'react-responsive-modal'
import ProductItem from '../ProductItem'
import ProductInfo from '../ProductItem/ProductInfo'

import './RecommendationModal.scss'

const RecommendationModal = ({
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
  isProductItemModalOpened,
  closeProductItemModal,
}) => {
  return (
    <Modal open={isProductItemModalOpened} onClose={closeProductItemModal}>
      <div className="recommendation-modal">
        <div className="recommendation-modal-box">
          <div className="recommendation-item">
            <div className="product-item-row">
              <div className="recommendation-image">
                <img src={swiperImages[0]} alt={name} />
              </div>

              <ProductInfo
                recommModal={true}
                isWhite={true}
                price={price}
                deliveryInfo={deliveryInfo}
                description={description}
                category={category}
                sizes={sizes}
                size={size}
                care={care}
                name={name}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default RecommendationModal