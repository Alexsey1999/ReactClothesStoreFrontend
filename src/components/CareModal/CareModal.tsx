// @ts-nocheck
import React from 'react'
import { Modal } from 'react-responsive-modal'
import './CareModal.scss'

const CareModal = ({ isCareModalOpened, closeCareModal }) => {
  return (
    <Modal open={isCareModalOpened} onClose={closeCareModal} center={true}>
      <div className="care-modal">
        <div className="care-modal-wrapper">
          <h4>Стандартные правила ухода:</h4>
          <p>
            Стирать в вывернутом состоянии, только в стиральной машине,
            деликатный режим, до 40 градусов, не использовать машинную сушку,
            сушить только на вешалке, без попадания солнечных лучей на ткань.
          </p>
        </div>
      </div>
    </Modal>
  )
}

export default CareModal
