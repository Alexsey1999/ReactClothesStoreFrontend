// Libs
import React from 'react'

// Components
import SliderSquares from '../SliderControls/SliderSquares'
import FeedbackSlide from '../FeedbackSlide'

// Styles
import './Feedback.scss'

// Images
import feedBackAvatar1 from '../../assets/images/feedback1.png'
import feedBackAvatar2 from '../../assets/images/feedback2.png'
import feedBackAvatar3 from '../../assets/images/feedback3.png'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'

export interface IFeedbackSlideItem {
  avatar: string
  name: string
  date: string
  text: string
  boughtItems: string[]
  sex: string
}

const Feedback: React.FC = () => {
  const prevRef = React.useRef<HTMLDivElement>(null)
  const nextRef = React.useRef<HTMLDivElement>(null)

  const feedbackSliders: IFeedbackSlideItem[] = [
    {
      avatar: feedBackAvatar1,
      name: 'Александр',
      date: '12 ноября 2019',
      text: `С удовольствием покупаю одежду для себя и своей семьи в этом интернет магазине. Понравилась цена, а также быстрая доставка, даже при том, что товар должен был идти очень далеко. Рекомендую!`,
      boughtItems: [
        'https://jolybell.com/storage/a3ht4d24ou.webp?preview=&width=765&height=841&quality=100',
        'https://jolybell.com/storage/88ahykwqx8.webp?preview=&width=765&height=987&quality=100',
        'https://jolybell.com/storage/wwv9wxidea.webp?preview=&width=765&height=943&quality=100',
      ],
      sex: 'male',
    },
    {
      avatar: feedBackAvatar2,
      name: 'Екатерина',
      date: '5 января 2018',
      text: `Заказывала футболку и свитшот. Хочется отметить качество товара, сразу видно, что сделано из прочного и дорого материала.
      После стирки цвет разумеется не меняется.
        `,
      boughtItems: [
        'https://jolybell.com/storage/3z7hyxd15u.webp?preview=&width=765&height=841&quality=100',
        'https://jolybell.com/storage/jz62xi4syu.webp?preview=&width=765&height=645&quality=100',
      ],
      sex: 'female',
    },
    {
      avatar: feedBackAvatar3,
      name: 'Сергей',
      date: '17 июля 2017',
      text: `На свой день рождения решил заказать поло и кепку. Цена оказалась приемлимой
        Возможно  по фото и не скажешь про качество, но положительные отзывы и фото товаров сыграли свою роль. Покупкой остался доволен.`,
      boughtItems: [
        'https://jolybell.com/storage/72akcrg9go.webp?preview=&width=765&height=937&quality=100',
        'https://jolybell.com/storage/bWlsUc0Mqx.webp?preview=&width=765&height=598&quality=100',
      ],
      sex: 'male',
    },
  ]

  return (
    <div className="feedback">
      <div className="feedback-container">
        <div className="default-title feedback-title">
          Что о нас говорят покупатели?
        </div>
        <div className="feedback-slider-wrapper">
          <SliderSquares
            feedbackBlock={true}
            prevRef={prevRef}
            nextRef={nextRef}
          />
          <Swiper
            className="feedback-slider"
            slidesPerView={1}
            speed={500}
            spaceBetween={40}
            pagination={{
              clickable: true,
              bulletClass: 'slider-dot',
              type: 'bullets',
              el: '.feedback-dots',
            }}
            onInit={(swiper: any) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
              swiper.navigation.update()
            }}
            breakpoints={{
              1166: {
                allowTouchMove: false,
              },
              981: {
                allowTouchMove: false,
              },
              320: {
                allowTouchMove: true,
              },
            }}
          >
            {feedbackSliders.map((buyer: IFeedbackSlideItem, index) => (
              <SwiperSlide key={buyer.name + index}>
                <FeedbackSlide {...buyer} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="feedback-dots"></div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
