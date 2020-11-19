// @ts-nocheck
import React from 'react'

import HitsCard from './HitsCard'
import SliderSquares from '../SliderControls/SliderSquares'

import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './Hits.scss'

SwiperCore.use([Navigation])

const Hits = () => {
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
            allowTouchMove={false}
            onInit={(swiper: any) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
              swiper.navigation.update()
            }}
            tra
          >
            {/* {[1, 2, 3, 4, 5, 6].map((i, el, arr) => {
              return (
                <SwiperSlide key={arr.length}>
                  <HitsCard />
                </SwiperSlide>
              )
            })} */}
            <SwiperSlide>
              <HitsCard />
            </SwiperSlide>
            <SwiperSlide>
              <HitsCard />
            </SwiperSlide>
            <SwiperSlide>
              <HitsCard />
            </SwiperSlide>
            <SwiperSlide>
              <HitsCard />
            </SwiperSlide>
            <SwiperSlide>
              <HitsCard />
            </SwiperSlide>
            <SwiperSlide>
              <HitsCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Hits
