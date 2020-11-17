// Libs
import React from 'react'

// Styles
import './MenuLink.scss'

// MenuLink props interface
interface IMenuLinkProps {
  linkName: string
}

const MenuLink: React.FC<IMenuLinkProps> = ({ linkName }) => {
  return (
    <li className="menu-item">
      <a href="/" className="menu-link">
        {linkName}
      </a>
    </li>
  )
}

export default MenuLink
