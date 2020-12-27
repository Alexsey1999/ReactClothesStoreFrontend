// Libs
import React from 'react'
import { Modal } from 'react-responsive-modal'

// Interfaces
import { ICare } from '../../interfaces/product'

// Styles
import './CareModal.scss'

interface ICareModalProps {
  closeCareModal: () => void
  isCareModalOpened: boolean
  careInfo: ICare[]
}

const CareModal: React.FC<ICareModalProps> = ({
  isCareModalOpened,
  closeCareModal,
  careInfo,
}) => {
  const careInfoParse = (elem: ICare, index: number) => {
    if ('h4' in elem) {
      return <h4 key={elem.h4! + index}>{elem.h4}</h4>
    } else {
      return <p key={elem.p! + index}>{elem.p}</p>
    }
  }

  return (
    <Modal open={isCareModalOpened} onClose={closeCareModal} center={true}>
      <div className="care-modal">
        <div className="care-modal-wrapper">
          {careInfo && careInfo.map(careInfoParse)}
        </div>
      </div>
    </Modal>
  )
}

export default CareModal
