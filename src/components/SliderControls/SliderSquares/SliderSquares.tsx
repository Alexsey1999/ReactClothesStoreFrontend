// Libs
import React, { RefObject } from 'react'

// Styles
import './SliderSquares.scss'

// Images
import leftArrow from '../../../assets/icons/left-arrow-slider.svg'
import rightArrow from '../../../assets/icons/right-arrow-slider.svg'

// SliderSquares props interface
interface ISliderSquaresProps {
  prevRef: RefObject<HTMLDivElement>
  nextRef: RefObject<HTMLDivElement>
}

const Squares: React.FC<ISliderSquaresProps> = ({ prevRef, nextRef }) => {
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
