// Libs
import React from 'react'

// Styles
import './FeedbackSlide.scss'

import { IFeedbackSlideItem } from '../Feedback/Feedback'

const FeedbackSlide: React.FC<IFeedbackSlideItem> = ({
  avatar,
  name,
  date,
  text,
  boughtItems,
  sex,
}) => {
  return (
    <div className="feedback-slide">
      <div className="feedback-slide-row">
        <div className="feedback-slide-person">
          <img src={avatar} alt="" />
          <div className="feedback-slide-person-wrapper">
            <div className="feedback-slide-name">{name}</div>
            <div className="feedback-slide-date">{date}</div>
          </div>
        </div>
        <div className="feedback-slide-buyings">
          <div className="feedback-slide-buyings-title">
            {sex === 'male' ? 'Заказывал:' : 'Заказывала:'}
          </div>
          <div className="feedback-slide-goods">
            {boughtItems.map((item, index) => (
              <div key={item + index} className="feedback-slide-buyings-item">
                <img src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="feedback-slide-text">{text}</p>
    </div>
  )
}

export default FeedbackSlide
