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

SwiperCore.use([Navigation])

const ProductItem = () => {
  const {
    name,
    price,
    swiperImages,
    isBlack,
    isWhite,
    deliveryInfo,
    description,
    sizes,
  } = useSelector((store) => store.product.product)
  const [isSizeModalOpened, setIsSizeModalOpened] = React.useState(false)
  const [isCareModalOpened, setIsCareModalOpened] = React.useState(false)
  const [activeSize, setActiveSize] = React.useState(0)
  const [productQuantity, setProductQuantity] = React.useState(1)

  const prevRef = React.useRef<HTMLDivElement>(null)
  const nextRef = React.useRef<HTMLDivElement>(null)

  const prevRecomendationRef = React.useRef<HTMLDivElement>(null)
  const nextRecomendationRef = React.useRef<HTMLDivElement>(null)

  const downProductQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity((prevVal) => prevVal - 1)
    }
  }

  const upProductQuantity = () => {
    if (productQuantity < 10) {
      setProductQuantity((prevVal) => prevVal + 1)
    }
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
              <div className="product-swiper-controls">
                <svg
                  className="left-circle-arrow"
                  ref={prevRef}
                  width="50"
                  height="50"
                  viewBox="0 0 133 133"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M66.5 0C29.773 0 0 29.773 0 66.5C0 103.227 29.773 133 66.5 133C103.227 133 133 103.227 133 66.5C133 29.773 103.227 0 66.5 0ZM66.5 124.688C34.3639 124.688 8.3125 98.6361 8.3125 66.5C8.3125 34.3639 34.3639 8.3125 66.5 8.3125C98.6361 8.3125 124.688 34.3639 124.688 66.5C124.688 98.6361 98.6361 124.688 66.5 124.688Z"
                    fill={isBlack ? '#ffffff' : '#000000'}
                  />
                  <path
                    d="M76.0178 30.3406L42.7678 63.5906C41.1562 65.2118 41.1562 67.8297 42.7678 69.4509L76.0178 102.701L81.8781 96.7991L51.579 66.5L81.8781 36.2009L76.0178 30.3406Z"
                    fill={isBlack ? '#ffffff' : '#000000'}
                  />
                </svg>
                <svg
                  className="right-circle-arrow"
                  ref={nextRef}
                  width="50"
                  height="50"
                  viewBox="0 0 127 127"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M63.5 0C28.4299 0 0 28.4299 0 63.5C0 98.5701 28.4299 127 63.5 127C98.5701 127 127 98.5701 127 63.5C127 28.4299 98.5701 0 63.5 0ZM63.5 119.062C32.8136 119.062 7.9375 94.1864 7.9375 63.5C7.9375 32.8136 32.8136 7.9375 63.5 7.9375C94.1864 7.9375 119.062 32.8136 119.062 63.5C119.062 94.1864 94.1864 119.062 63.5 119.062Z"
                    fill={isBlack ? '#ffffff' : '#000000'}
                  />
                  <path
                    d="M54.3718 28.9719L48.7759 34.5678L77.7478 63.5L48.8156 92.4719L54.4115 98.0678L86.1218 66.3178C87.6607 64.7698 87.6607 62.27 86.1218 60.7219L54.3718 28.9719Z"
                    fill={isBlack ? '#ffffff' : '#000000'}
                  />
                </svg>
              </div>
              <>
                <Swiper
                  className="product-slider"
                  slidesPerView={1}
                  spaceBetween={0}
                  speed={200}
                  pagination={{
                    clickable: true,
                    bulletClass: 'slider-dot',
                    type: 'bullets',
                    el: '.product-dots',
                  }}
                  onInit={(swiper: any) => {
                    swiper.params.navigation.prevEl = prevRef.current
                    swiper.params.navigation.nextEl = nextRef.current
                    swiper.navigation.init()
                    swiper.navigation.update()
                  }}
                >
                  {swiperImages &&
                    swiperImages.map((image) => (
                      <SwiperSlide key={image}>
                        <div className="product-swiper-image">
                          <img src={image} alt={name} />
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
                <div className="product-dots"></div>
              </>
            </div>
            <div className="product-info-block">
              <div className="product-price">{price} RUB</div>
              <div className="product-delivery">{deliveryInfo}</div>
              <div className="product-description">
                {description.map(descriptionParse)}
              </div>

              <div className="size-and-care">
                <Button onClick={openSizeModal} disableDefaultStyles={true}>
                  Размерная сетка
                </Button>
                <Button onClick={openCareModal} disableDefaultStyles={true}>
                  Уход за вещью
                </Button>
              </div>

              <div className="product-size">
                <h4>Выберите размер:</h4>
                <ul className="size-list">
                  {sizes &&
                    sizes.map((size, index) => (
                      <li
                        key={size + index}
                        onClick={() => setActiveSize(index)}
                        className={classNames('size-item', {
                          active: index === activeSize,
                        })}
                      >
                        {size}
                      </li>
                    ))}
                </ul>
              </div>

              <div className="product-item-row">
                <div className="quantity">
                  <h4>Количество:</h4>
                  <div className="quantity-wrapper">
                    <button
                      onClick={downProductQuantity}
                      className="quantity-left-btn"
                    >
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
                    <button
                      onClick={upProductQuantity}
                      className="quantity-right-btn"
                    >
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

                <Button
                  disableDefaultStyles={true}
                  className="cart-btn product-item-add-to-cart-btn"
                >
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
                </Button>
              </div>

              <SizeModal
                isSizeModalOpened={isSizeModalOpened}
                closeSizeModal={closeSizeModal}
              />
              <CareModal
                isCareModalOpened={isCareModalOpened}
                closeCareModal={closeCareModal}
              />
            </div>
          </div>
        </div>

        <div className="recomendations">
          <div className="recomendations-title">
            Рекомендуем к <span>покупке</span>
          </div>

          <div className="recomendations-slider-wrapper">
            <div className="recomendations-slider-controls">
              <svg
                ref={prevRecomendationRef}
                className="left-arrow-angle"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3725 0L5.37236 15L20.3725 30L24.6276 25.7446L13.8829 15L24.6276 4.25543L20.3725 0Z"
                  fill="#fff"
                />
              </svg>
              <svg
                ref={nextRecomendationRef}
                className="right-arrow-angle"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.62764 30L24.6276 15L9.62764 0L5.37236 4.25543L16.1171 15L5.37236 25.7446L9.62764 30Z"
                  fill="#fff"
                />
              </svg>
            </div>
            <Swiper
              width={1000}
              className="recomendations-slider"
              slidesPerView={4}
              spaceBetween={10}
              speed={500}
              //  pagination={{
              //    clickable: true,
              //    bulletClass: 'slider-dot',
              //    type: 'bullets',
              //    el: '.product-dots',
              //  }}
              onInit={(swiper: any) => {
                swiper.params.navigation.prevEl = prevRecomendationRef.current
                swiper.params.navigation.nextEl = nextRecomendationRef.current
                swiper.navigation.update()
              }}
            >
              {Array(8)
                .fill(1)
                .map((el, index) => (
                  <SwiperSlide key={el + index.toString()}>
                    <div className="recomendation-content">
                      <div className="recomendation-img">
                        <img
                          src="https://jolybell.com/storage/673dmnx9xi.png?preview=&width=110&height=142"
                          alt=""
                        />
                      </div>
                      <div className="recomendation-price">1080 RUB</div>
                      <div className="recomendation-product-name">
                        Термочашка
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
