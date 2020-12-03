// @ts-nocheck
import React from 'react'

import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import RecommendationModal from '../../RecommendationModal'

import './RecommendationSlider.scss'

SwiperCore.use([Navigation])

const RecommendationSlider = ({ recommendations, _id }) => {
  const prevRecomendationRef = React.useRef<HTMLDivElement>(null)
  const nextRecomendationRef = React.useRef<HTMLDivElement>(null)

  const [
    isProductItemModalOpened,
    setIsProductItemModalOpened,
  ] = React.useState(false)
  const [currentModal, setCurrentModal] = React.useState(0)

  const openProductItemModal = (index) => {
    setIsProductItemModalOpened(true)
    setCurrentModal(index)
  }

  const closeProductItemModal = () => {
    setIsProductItemModalOpened(false)
  }

  const recommendationsParse = (el, index) => (
    <React.Fragment key={el + index.toString()}>
      {el._id !== _id ? (
        <SwiperSlide>
          <div
            onClick={() => openProductItemModal(index)}
            className="recomendation-content"
          >
            <div className="recomendation-img">
              <img src={el.imageUrl} alt={el.name} />
            </div>
            <div className="recomendation-price">{el.price} RUB</div>
            <div className="recomendation-product-name">{el.name}</div>
          </div>
        </SwiperSlide>
      ) : null}
    </React.Fragment>
  )

  return (
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
        {recommendations && recommendations.map(recommendationsParse)}
      </Swiper>

      <RecommendationModal
        isProductItemModalOpened={isProductItemModalOpened}
        closeProductItemModal={closeProductItemModal}
        {...recommendations[currentModal]}
      />
    </div>
  )
}

export default RecommendationSlider
