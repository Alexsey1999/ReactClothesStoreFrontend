// @ts-nocheck
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
            <SwiperSlide>
              <HitsCard
                image="https://jolybell.com/storage/3z7hyxd15u.webp?preview=&width=765&height=841&quality=100"
                price="950"
                name="Футболка Black"
                productLink="/product/5fe1d07b32b6ee08600051c6?category=t-shirts"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HitsCard
                image="https://jolybell.com/storage/211v3fbj7d.webp?preview=&width=765&height=985&quality=100"
                price="3200"
                name="Рубашка Black"
                productLink="/product/5fe1d2d532b6ee08600051c9?category=shirts"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HitsCard
                image="https://jolybell.com/storage/jz62xi4syu.webp?preview=&width=765&height=645&quality=100"
                price="1950"
                name="Свитшот White"
                productLink="/product/5fe366e5d53fa80880c45dc6?category=sweatshirts"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HitsCard
                image="https://jolybell.com/storage/emjyigqzhw.webp?preview=&width=765&height=954&quality=100"
                price="3900"
                name="Худи ZIP Black"
                productLink="/product/5fe220f3beee020fdc8a549a?category=hoodies"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HitsCard
                image="https://jolybell.com/storage/6o674ikgpq.webp?preview=&width=765&height=645&quality=100"
                price="1950"
                name="SHOT Simple Black"
                productLink="/product/5fe365d2d53fa80880c45dc4?category=sweatshirts"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HitsCard
                image="https://jolybell.com/storage/4ph1bvroa5.webp?preview=&width=765&height=941&quality=100"
                price="2251"
                name="POLO White"
                productLink="/product/5fe36fe81dea931f70d78ad9?category=polo"
              />
            </SwiperSlide>
          </Swiper>
          <div className="slider-dots"></div>
        </div>
      </div>
    </div>
  )
}

export default Hits
