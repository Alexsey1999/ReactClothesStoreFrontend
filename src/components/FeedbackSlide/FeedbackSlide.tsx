// @ts-nocheck

import React from 'react'
import './FeedbackSlide.scss'

const FeedbackSlide = ({ avatar, name, date, text, boughtItems }) => {
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
          <div className="feedback-slide-buyings-title">Заказывал:</div>
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
