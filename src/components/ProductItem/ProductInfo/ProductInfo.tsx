// @ts-nocheck
import React from 'react'
import Button from '../../Button'
import CareModal from '../../CareModal'
import SizeModal from '../../SizeModal'
import ProductQuantity from '../ProductQuantity'
import ProductSizes from '../ProductSizes'
import SizeAndCare from '../SizeAndCare'
import classNames from 'classnames'
import axios from '../../../axios'

import './ProductInfo.scss'

import { useSelector, useDispatch } from 'react-redux'
import { openShoppingCart } from '../../../store/modals/actions'
import { setCart } from '../../../store/cart/actions'
import { notify } from '../../../utils/notify'
import Loader from '../../Loader'

const ProductInfo = ({
  productId,
  price,
  deliveryInfo = '',
  description = [],
  category,
  sizes,
  size,
  care,
  name,
  isBlack,
  isWhite,
  recommModal,
}) => {
  // const { productSize, productQuantity } = useSelector((state) => state.product)
  const { productQuantity } = useSelector((state) => state.product)
  const [productSizeIndex, setProductSizeIndex] = React.useState(0)

  const dispatch = useDispatch()
  const [isSizeModalOpened, setIsSizeModalOpened] = React.useState(false)
  const [isCareModalOpened, setIsCareModalOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const openSizeModal = () => {
    setIsSizeModalOpened(true)
  }

  const closeSizeModal = () => {
    setIsSizeModalOpened(false)
  }

  const openCareModal = () => {
    setIsCareModalOpened(true)
  }

  const closeCareModal = () => {
    setIsCareModalOpened(false)
  }

  const descriptionParse = (elem, index) => {
    if ('p' in elem) {
      return elem['p'].map((p) => <p key={p}>{p}</p>)
    } else {
      return (
        <React.Fragment key={elem.ulTitle + index}>
          <p>{elem.ulTitle}</p>
          <ul>
            {elem['li'].map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        </React.Fragment>
      )
    }
  }

  // console.log(size, care)

  const addProductItemToCart = async (productId, category) => {
    try {
      setIsLoading(true)
      const response = await axios({
        method: 'POST',
        url: `/cart/add/${productId}?category=${category}`,
        data: { productSize: sizes[productSizeIndex] || {}, productQuantity },
      })

      dispatch(setCart(response.data.cart))
      setIsLoading(false)
      dispatch(openShoppingCart(true))

      notify(response.data.message)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      className={classNames('product-info-block', {
        'product-info-black': isBlack,
        'product-info-white': isWhite,
      })}
    >
      {recommModal && <h4 className="product-name">{name}</h4>}

      <div className="product-price">{price} RUB</div>
      <div className="product-delivery">{deliveryInfo}</div>
      <div className="product-description">
        {description.map(descriptionParse)}
      </div>

      {size.length && care.length ? (
        <SizeAndCare
          category={category}
          openSizeModal={openSizeModal}
          openCareModal={openCareModal}
        />
      ) : null}

      {sizes.length ? (
        <ProductSizes
          productSizeIndex={productSizeIndex}
          setProductSizeIndex={setProductSizeIndex}
          sizes={sizes}
        />
      ) : null}

      <div className="product-quantity-cartbtn-wrapper">
        <ProductQuantity />

        <Button
          onClick={() => addProductItemToCart(productId, category)}
          disableDefaultStyles={true}
          className="cart-btn product-item-add-to-cart-btn"
        >
          {isLoading ? (
            <Loader
              color={classNames({
                black: isBlack || recommModal,
                white: isWhite,
              })}
            />
          ) : (
            <>
              <span> Добавить в корзину</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M19.7709 9.44699C19.7706 9.44675 19.7704 9.44648 19.7702 9.44624L15.688 5.38375C15.3821 5.07941 14.8875 5.08054 14.5831 5.3864C14.2787 5.69222 14.2799 6.18687 14.5857 6.49125L17.3265 9.21874H0.78125C0.349766 9.21874 0 9.56851 0 9.99999C0 10.4315 0.349766 10.7812 0.78125 10.7812H17.3264L14.5857 13.5087C14.2799 13.8131 14.2788 14.3078 14.5831 14.6136C14.8875 14.9195 15.3822 14.9205 15.688 14.6162L19.7702 10.5537C19.7704 10.5535 19.7706 10.5532 19.7709 10.553C20.0769 10.2476 20.0759 9.75136 19.7709 9.44699Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </>
          )}
        </Button>
      </div>

      <SizeModal
        sizeInfo={size}
        isSizeModalOpened={isSizeModalOpened}
        closeSizeModal={closeSizeModal}
        name={name}
      />
      <CareModal
        careInfo={care}
        isCareModalOpened={isCareModalOpened}
        closeCareModal={closeCareModal}
      />
    </div>
  )
}

export default ProductInfo
