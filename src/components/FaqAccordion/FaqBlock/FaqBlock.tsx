//  Libs
import React from 'react'

// Styles
import './FaqBlock.scss'

interface IFaqBlockProps {
  title?: string
  isMultiple?: boolean
}

const FaqBlock: React.FC<IFaqBlockProps> = ({
  title,
  children,
  isMultiple,
}) => {
  return (
    <>
      {isMultiple ? (
        <div className="faq-block">
          <p className="faq-block-title">{title}</p>
          <p className="faq-block-text">{children}</p>
        </div>
      ) : (
        <div className="faq-block">
          <p className="faq-block-text">{children}</p>
        </div>
      )}
    </>
  )
}

export default FaqBlock
