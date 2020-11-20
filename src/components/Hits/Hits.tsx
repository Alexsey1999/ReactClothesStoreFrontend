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
    <div className="hits">
      <div className="hits-container">
        <div className="default-title hits-title">Хиты продаж</div>

        <div className="hits-slider">
          <SliderSquares prevRef={prevRef} nextRef={nextRef} />
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
                price="2500"
                name="Футболка Black"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HitsCard
                image="https://jolybell.com/storage/211v3fbj7d.webp?preview=&width=765&height=985&quality=100"
                price="4099"
                name="Рубашка Black"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HitsCard
                image="https://jolybell.com/storage/jz62xi4syu.webp?preview=&width=765&height=645&quality=100"
                price="5100"
                name="Свитшот White"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HitsCard
                image="https://jolybell.com/storage/emjyigqzhw.webp?preview=&width=765&height=954&quality=100"
                price="3900"
                name="Худи ZIP Black"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HitsCard
                image="https://jolybell.com/storage/6o674ikgpq.webp?preview=&width=765&height=645&quality=100"
                price="1950"
                name="SHOT Simple Black"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HitsCard
                image="https://jolybell.com/storage/4ph1bvroa5.webp?preview=&width=765&height=941&quality=100"
                price="2251"
                name="POLO White"
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
