// @ts-nocheck
// Libs
import React from 'react'
import classNames from 'classnames'
import axios from '../../axios'
import { useDispatch } from 'react-redux'
import { setSize } from '../../store/cart/actions'

// Styles
import './ClothesSizes.scss'

// ClothesSizes props interface
interface IClothesSizesProps {
  sizes: string[]
}

const ClothesSizes: React.FC<IClothesSizesProps> = ({
  sizes,
  currentSize,
  productIndex,
  id,
}) => {
  const [activeSize, setActiveSize] = React.useState(0)
  const dispatch = useDispatch()

  const setProductItemSize = async (size, index) => {
    try {
      setActiveSize(index)
      const response = await axios({
        method: 'POST',
        url: `/cart/size/${id}`,
        data: { size, productIndex },
      })

      dispatch(setSize(response.data.cart))
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
