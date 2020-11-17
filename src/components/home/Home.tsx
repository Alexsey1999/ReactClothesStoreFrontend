// Libs
import React from 'react'
import classNames from 'classnames'

// Components
import Header from '../Header'
import HomeContent from '../HomeContent'

// Styles
import './Home.scss'

// Images
import homeSliderImage1 from '../../assets/images/clothes1.jpg'
import homeSliderImage2 from '../../assets/images/clothes2.jpg'

// Swiper
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'

SwiperCore.use([Navigation])

const Home = () => {
  const navigationPrevRef = React.useRef<HTMLDivElement>(null)
  const navigationNextRef = React.useRef<HTMLDivElement>(null)

  return (
    <div className="home">
      <Header />
      <div className="home-container">
        <div className="home-box">
          <HomeContent />
          <div className="home-slider-dots">
            <div
              ref={navigationPrevRef}
              className={classNames('left-control')}
            ></div>
            <div
              ref={navigationNextRef}
              className={classNames('right-control')}
            ></div>
          </div>
        </div>
      </div>
      <div className="home-slider-wrapper">
        <Swiper
          className="home-slider"
          slidesPerView={1}
          speed={0}
          onInit={(swiper: any) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current
            swiper.params.navigation.nextEl = navigationNextRef.current
            swiper.navigation.init()
            swiper.navigation.update()
          }}
        >
          <SwiperSlide>
            <div className="home-slide">
              <img src={homeSliderImage1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-slide">
              <img src={homeSliderImage2} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Home
