// @ts-nocheck
import React from 'react'
import { Modal } from 'react-responsive-modal'

import './SizeModal.scss'

const SizeModal = () => {
  return (
    <Modal open={true} center={true}>
      <div className="size-modal">
        <div className="size-modal-wrapper">
          <p>Как правильно выбрать размер</p>
          <p>Выбираете вашу футболку/свитшот/худи и замеряете метром</p>
          <p>
            Ширина на размерной сетке указана буквой А, меряете под подмышками,
            от шва до шва, как показано красной линией.
          </p>
          <p>
            Длина на размерной сетке указана буквой B, меряете от горловины и до
            самого низа вещи, как показано красной линией.
          </p>
          <p>
            Длина рукава на размерной сетке указана буквой С, если это свитшот
            или худи, меряете от горловины и до самого конца рукава, если
            футболка, то как показано красной линией.
          </p>
          <p>
            Далее сравниваете ваши показатели с нашей таблицей размеров,
            прикинув плюс/минус пару сантиметров и выбираете размер.
          </p>
          <p>
            <img
              src="https://jolybell.com/storage/vq6szs6sgf.png?width=1616&height=1436"
              alt=""
            />
          </p>

          <table>
            <thead>
              <tr>
                <th>(см)</th>
                <th>A</th>
                <th>B</th>
                <th>C</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>XS</td>
                <td>45</td>
                <td>65</td>
                <td>21</td>
              </tr>
              <tr>
                <td>S</td>
                <td>48</td>
                <td>67</td>
                <td>21</td>
              </tr>
              <tr>
                <td>M</td>
                <td>50</td>
                <td>68</td>
                <td>22</td>
              </tr>
              <tr>
                <td>L</td>
                <td>52</td>
                <td>68</td>
                <td>22</td>
              </tr>
              <tr>
                <td>XL</td>
                <td>52</td>
                <td>68</td>
                <td>22</td>
              </tr>
              <tr>
                <td>XXL</td>
                <td>52</td>
                <td>68</td>
                <td>22</td>
              </tr>
              <tr>
                <td>XXXL</td>
                <td>52</td>
                <td>68</td>
                <td>22</td>
              </tr>
            </tbody>
          </table>

          <p>
            <em>Допустимо отклонение в длину и ширину (±) на 1-2 см.</em>
          </p>
        </div>
      </div>
    </Modal>
  )
}

export default SizeModal
