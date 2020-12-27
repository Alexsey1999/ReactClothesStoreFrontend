// Libs
import React, { useState, useRef } from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Components
import RecommendationModal from '../../RecommendationModal'

// Styles
import './RecommendationSlider.scss'
// import 'swiper/swiper.scss'

// Interfaces
import { IProductItem } from '../../../interfaces/product'
interface IRecommendationSliderProps {
  _id: string
  recommendations: IProductItem[]
}

SwiperCore.use([Navigation])

const RecommendationSlider: React.FC<IRecommendationSliderProps> = ({
  recommendations,
  _id,
}) => {
  const [currentModal, setCurrentModal] = useState<number>(0)
  const [
    isProductItemModalOpened,
    setIsProductItemModalOpened,
  ] = useState<boolean>(false)

  const prevRecomendationRef = useRef<SVGSVGElement>(null)
  const nextRecomendationRef = useRef<SVGSVGElement>(null)

  const openProductItemModal = (index: number) => {
    setIsProductItemModalOpened(true)
    setCurrentModal(index)
  }

  const closeProductItemModal = () => {
    setIsProductItemModalOpened(false)
  }

  const recommendationsParse = (el: IProductItem, index: number) => (
    <React.Fragment key={el._id! + index}>
      {el._id !== _id ? (
        <SwiperSlide key={el._id! + index}>
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
        onInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevRecomendationRef.current
          swiper.params.navigation.nextEl = nextRecomendationRef.current
          swiper.navigation.update()
        }}
        breakpoints={{
          320: {
            width: 290,
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 0,
            allowTouchMove: false,
          },
          500: {
            width: 470,
            slidesPerView: 2,
            spaceBetween: 0,
            allowTouchMove: false,
          },
          680: {
            width: 650,
            slidesPerView: 3,
            spaceBetween: 0,
            allowTouchMove: false,
          },
          980: {
            width: 950,
            slidesPerView: 4,
            spaceBetween: 0,
            allowTouchMove: false,
          },
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
