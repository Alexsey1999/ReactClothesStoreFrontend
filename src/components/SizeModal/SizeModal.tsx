// @ts-nocheck
import React from 'react'
import { Modal } from 'react-responsive-modal'

import './SizeModal.scss'

const SizeModal = ({ isSizeModalOpened, closeSizeModal, sizeInfo, name }) => {
  const sizeInfoParse = (elem, index) => {
    if ('p' in elem) {
      return elem.p.map((p, index) => <p key={p + index}>{p}</p>)
    } else if ('img' in elem) {
      return (
        <p key={'p' + index}>
          <img src={elem.img} alt={name} />
        </p>
      )
    } else if ('table' in elem) {
      return (
        <table key={'table' + index}>
          <thead>
            <tr>
              {elem.table.th.map((th, index) => (
                <th key={th + index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {elem.table.tr.map((tr, index) => (
              <tr key={tr + index}>
                {tr.map((td, index) => (
                  <td key={td + index}>{td}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )
    } else if ('em' in elem) {
      return (
        <p key={'em' + index}>
          <em>{elem.em}</em>
        </p>
      )
    }
  }

  return (
    <Modal open={isSizeModalOpened} onClose={closeSizeModal} center={true}>
      <div className="size-modal">
        <div className="size-modal-wrapper">
          {sizeInfo && sizeInfo.map(sizeInfoParse)}
        </div>
      </div>
    </Modal>
  )
}

export default SizeModal
