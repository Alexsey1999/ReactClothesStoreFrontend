// @ts-nocheck

// Libs
import React, { RefObject } from 'react'
import classNames from 'classnames'

// Styles
import './SliderSquares.scss'

// Images
import leftArrow from '../../../assets/icons/left-arrow-slider.svg'
import rightArrow from '../../../assets/icons/right-arrow-slider.svg'

// SliderSquares props interface
interface ISliderSquaresProps {
  prevRef: RefObject<HTMLDivElement>
  nextRef: RefObject<HTMLDivElement>
  hitsBlock?: boolean
  feedbackBlock?: boolean
}

const Squares: React.FC<ISliderSquaresProps> = ({
  prevRef,
  nextRef,
  hitsBlock,
  feedbackBlock,
}) => {
  return (
    <div
      className={classNames({
        'squares-hits': hitsBlock,
        'squares-feedback': feedbackBlock,
      })}
    >
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
