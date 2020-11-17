// Libs
import React from 'react'

// Styles
import './ClothesSizes.scss'

// ClothesSizes props interface
interface IClothesSizesProps {
  sizes: string[]
}

const ClothesSizes: React.FC<IClothesSizesProps> = ({ sizes }) => {
  return (
    <ul className="clothes-size-list">
      {sizes.map((size) => (
        <li key={size}>{size}</li>
      ))}
    </ul>
  )
}

export default ClothesSizes
