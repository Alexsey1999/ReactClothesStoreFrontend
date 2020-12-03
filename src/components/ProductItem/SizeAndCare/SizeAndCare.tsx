// @ts-nocheck
import React from 'react'
import Button from '../../Button'

import './SizeAndCare.scss'

const SizeAndCare = ({ openSizeModal, openCareModal }) => {
  return (
    <div className="size-and-care">
      <Button onClick={openSizeModal} disableDefaultStyles={true}>
        Размерная сетка
      </Button>
      <Button onClick={openCareModal} disableDefaultStyles={true}>
        Уход за вещью
      </Button>
    </div>
  )
}

export default SizeAndCare
