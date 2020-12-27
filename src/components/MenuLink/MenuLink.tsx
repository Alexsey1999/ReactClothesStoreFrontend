// Libs
import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import './MenuLink.scss'

interface IMenuLinkProps {
  linkName: string
  linkurl: string
}

export function defineRoute(linkurl: string): string {
  if (linkurl === 'faq') {
    return '/faq'
  }
  return `/category/${linkurl}`
}

const MenuLink: React.FC<IMenuLinkProps> = ({ linkName, linkurl }) => {
  return (
    <li className="menu-item">
      <Link
        className="menu-link"
        to={() => ({ pathname: defineRoute(linkurl) })}
      >
        {linkName}
      </Link>
    </li>
  )
}

export default MenuLink
