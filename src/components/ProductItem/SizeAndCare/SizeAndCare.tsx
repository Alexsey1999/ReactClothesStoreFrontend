// Libs
import React from 'react'

// Components
import Button from '../../Button'

// Styles
import './SizeAndCare.scss'

interface ISizeAndCareProps {
  openSizeModal: () => void
  openCareModal: () => void
}

const SizeAndCare: React.FC<ISizeAndCareProps> = ({
  openSizeModal,
  openCareModal,
}) => {
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
