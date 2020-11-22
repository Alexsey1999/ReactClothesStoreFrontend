// Libs
import React from 'react'

// Components
import Button from '../Button'

// Styles
import './HomeContent.scss'

const HomeText: React.FC = () => {
  return (
    <div className="home-content">
      <h2 className="home-title">Магазин одежды</h2>
      <div className="home-descr">
        Выбери свой уникальный стиль на каждый день. Покупай одежду в нашем
        интернет магазине по низким ценам
      </div>
      <Button className="start-buy-btn" scrollTo="#hitsBlock">
        Начать покупки
      </Button>
    </div>
  )
}

export default HomeText
