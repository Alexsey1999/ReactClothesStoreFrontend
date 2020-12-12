// Libs
import React from 'react'
import classNames from 'classnames'

// Styles
import './ClothesSizes.scss'

// ClothesSizes props interface
interface IClothesSizesProps {
  sizes: string[]
}

const ClothesSizes: React.FC<IClothesSizesProps> = ({ sizes }) => {
  const [activeSize, setActiveSize] = React.useState(0)

  return (
    <ul className="clothes-size-list">
      {sizes.map((size, index) => (
        <li
          className={classNames({
            active: index === activeSize,
          })}
          onClick={() => setActiveSize(index)}
          key={size}
        >
          {size}
        </li>
      ))}
    </ul>
  )
}

export default ClothesSizes
