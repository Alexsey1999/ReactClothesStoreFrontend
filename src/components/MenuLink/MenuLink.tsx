// @ts-nocheck

import React from 'react'

import './MenuLink.scss'

const MenuLink = ({ linkName }) => {
  return (
    <li className="menu-item">
      <a href="" className="menu-link">
        {linkName}
      </a>
    </li>
  )
}

export default MenuLink
