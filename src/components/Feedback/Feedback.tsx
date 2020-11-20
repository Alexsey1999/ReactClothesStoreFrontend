// @ts-nocheck
import React from 'react'

import './Feedback.scss'

// Swiper
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import feedbackImage from ''
import FeedbackSlide from '../FeedbackSlide'

import feedBackAvatar from '../../assets/images/Alexander.png'

const Feedback = () => {
  const feedbackSliders = [
    {
      avatar: feedBackAvatar,
      name: 'Александр',
      date: '12 ноября 2019',
      text: `С удовольствием покупаю одежду для себя и своей семьи в этом интернет магазине. Понравилась цена, а также быстрая доставка, даже при том, что товар должен был идти очень далеко. Рекомендую!`,
      boughtItems: [
        'https://jolybell.com/storage/a3ht4d24ou.webp?preview=&width=765&height=841&quality=100',
        'https://jolybell.com/storage/88ahykwqx8.webp?preview=&width=765&height=987&quality=100',
        'https://jolybell.com/storage/wwv9wxidea.webp?preview=&width=765&height=943&quality=100',
      ],
    },
    {
      avatar: feedBackAvatar,
      name: 'Сергей',
      date: '17 июля 2017',
      text: `На свой день рождения решил заказать поло и кепку. Цена оказалась приемлимой
        Возможно  по фото и не скажешь про качество, но положительные отзывы и фото товаров сыграли свою роль. Покупкой остался доволен.`,
      boughtItems: [
        'https://jolybell.com/storage/72akcrg9go.webp?preview=&width=765&height=937&quality=100',
        'https://jolybell.com/storage/bWlsUc0Mqx.webp?preview=&width=765&height=598&quality=100',
      ],
    },
    {
      avatar: feedBackAvatar,
      name: 'Екатерина',
      date: '5 января 2018',
      text: `Заказывала футболку и свитшот. Хочется отметить качество товара, сразу видно, что сделано из прочного и дорого материала.
        После стирки цвет разумеется не меняется.
        Покупкой осталась довольна, буду рекомендовать своим друзьям
        `,
      boughtItems: [
        'https://jolybell.com/storage/3z7hyxd15u.webp?preview=&width=765&height=841&quality=100',
        'https://jolybell.com/storage/jz62xi4syu.webp?preview=&width=765&height=645&quality=100',
      ],
    },
  ]

  return (
    <div className="feedback">
      <div className="default-title feedback-title">
        Что о нас говорят покупатели?
      </div>
      <div className="feedback-slider-wrapper">
        <Swiper className="feedback-slider" slidesPerView={1} speed={500}>
          {feedbackSliders.map((buyer, index) => (
            <SwiperSlide key={buyer.name + index}>
              <FeedbackSlide {...buyer} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Feedback
