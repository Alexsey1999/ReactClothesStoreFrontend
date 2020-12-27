// Libs
import React from 'react'

// Styles
import './ProductSwiper.scss'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, EffectFade, EffectCoverflow } from 'swiper'

// Interfaces
interface IProductSwiperProps {
  name: string
  isBlack: boolean
  swiperImages: string[]
}

SwiperCore.use([Navigation, EffectFade, EffectCoverflow])

const ProductSwiper: React.FC<IProductSwiperProps> = ({
  swiperImages,
  name,
  isBlack,
}) => {
  const prevRef = React.useRef<SVGSVGElement>(null)
  const nextRef = React.useRef<SVGSVGElement>(null)

  return (
    <>
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

      <Swiper
        effect="coverflow"
        allowTouchMove={false}
        coverflowEffect={{
          rotate: 0,
          stretch: 200,
          depth: 1000,
          modifier: 1,
          slideShadows: false,
        }}
        className="product-slider"
        slidesPerView={1}
        centeredSlides={true}
        speed={1000}
        onInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
          swiper.navigation.update()
        }}
        pagination={{
          clickable: true,
          bulletClass: 'slider-dot',
          type: 'bullets',
          el: '.product-dots',
        }}
      >
        {swiperImages.map((image) => (
          <SwiperSlide key={image}>
            <div className="product-swiper-image">
              <img src={image} alt={name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="product-dots"></div>
    </>
  )
}

export default ProductSwiper
