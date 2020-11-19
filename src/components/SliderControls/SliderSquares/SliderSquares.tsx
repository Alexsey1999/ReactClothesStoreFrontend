// @ts-nocheck
import React from 'react'
import './SliderSquares.scss'

import leftArrow from '../../../assets/icons/left-arrow-slider.svg'
import rightArrow from '../../../assets/icons/right-arrow-slider.svg'

const Squares = ({ prevRef, nextRef }) => {
  return (
    <div className="squares">
      <div ref={prevRef} className="square-left">
        <img src={leftArrow} alt="" />
      </div>
      <div ref={nextRef} className="square-right">
        <img src={rightArrow} alt="" />
      </div>
    </div>
  )
}

export default Squares
