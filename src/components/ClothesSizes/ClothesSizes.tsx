// Libs
import React from 'react'
import classNames from 'classnames'
import axios from '../../axios'

// Redux
import { useDispatch } from 'react-redux'
import { setSize } from '../../store/cart/actions'

// Styles
import './ClothesSizes.scss'

// Utils
import { notify } from '../../utils/notify'

// Interfaces
import { IProductSize } from '../../interfaces/product'

interface IClothesSizesProps {
  sizes: IProductSize[]
  currentSize: string
  productIndex: number
  id: string
}

const ClothesSizes: React.FC<IClothesSizesProps> = ({
  sizes,
  currentSize,
  productIndex,
  id,
}) => {
  const dispatch = useDispatch()

  const setProductItemSize = async (size: IProductSize, index: number) => {
    try {
      const response = await axios({
        method: 'POST',
        url: `/cart/size/${id}`,
        data: { size, productIndex },
      })

      if (response.data.errorMessage) {
        notify(response.data.errorMessage)
        return
      }

      dispatch(setSize(response.data.cart))
      notify(response.data.message)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ul className="clothes-size-list">
      {sizes.map((size, index) => (
        <li
          className={classNames({
            active: size.size === currentSize,
          })}
          onClick={() => setProductItemSize(size, index)}
          key={size.size}
        >
          {size.size}
        </li>
      ))}
    </ul>
  )
}

export default ClothesSizes
