// Libs
import React from 'react'
import { Modal } from 'react-responsive-modal'

// Components
import ProductInfo from '../ProductItem/ProductInfo'

// Styles
import './RecommendationModal.scss'

// Interfaces
import { IProductItem } from '../../interfaces/product'

interface IRecommendationModalProps extends IProductItem {
  closeProductItemModal: () => void
  isProductItemModalOpened: boolean
}

const RecommendationModal: React.FC<IRecommendationModalProps> = ({
  _id,
  name,
  price,
  imageUrl,
  category,
  deliveryInfo,
  description,
  sizes,
  sizeAndCare,
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
                <img src={imageUrl} alt={name} />
              </div>

              <ProductInfo
                recommModal={true}
                productId={_id!}
                isWhite={true}
                price={price || 0}
                deliveryInfo={deliveryInfo || ''}
                description={description! || ''}
                category={category}
                sizes={sizes || []}
                size={sizeAndCare?.size || []}
                care={sizeAndCare?.care || []}
                name={name || ''}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default RecommendationModal
