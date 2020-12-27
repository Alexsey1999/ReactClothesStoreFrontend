// Libs
import React from 'react'

// Components
import HitsCard from './HitsCard'
import SliderSquares from '../SliderControls/SliderSquares'

// Swiper
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Styles
import './Hits.scss'

// Utils
import hits from '../../utils/hits'

SwiperCore.use([Navigation, Pagination])

const Hits: React.FC = () => {
  const prevRef = React.useRef<HTMLDivElement>(null)
  const nextRef = React.useRef<HTMLDivElement>(null)

  return (
    <div className="hits" id="hitsBlock">
      <div className="hits-container">
        <div className="default-title hits-title">Хиты продаж</div>

        <div className="hits-slider">
          <SliderSquares prevRef={prevRef} nextRef={nextRef} hitsBlock={true} />
          <Swiper
            className="hits-cards"
            spaceBetween={70}
            slidesPerView={3}
            speed={500}
            pagination={{
              clickable: true,
              bulletClass: 'slider-dot',
              type: 'bullets',
              el: '.slider-dots',
            }}
            onInit={(swiper: any) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
              swiper.navigation.update()
            }}
            breakpoints={{
              1166: {
                allowTouchMove: false,
                slidesPerView: 3,
              },
              900: {
                slidesPerView: 2,
                allowTouchMove: true,
              },
              320: {
                slidesPerView: 1,
                allowTouchMove: true,
              },
            }}
          >
            {hits?.map((hit, index) => (
              <SwiperSlide key={hit.name + index}>
                <HitsCard
                  image={hit.image}
                  price={hit.price}
                  name={hit.name}
                  productLink={hit.productLink}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slider-dots"></div>
        </div>
      </div>
    </div>
  )
}

export default Hits
