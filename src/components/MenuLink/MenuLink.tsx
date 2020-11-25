// Libs
import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../../axios'

// Styles
import './MenuLink.scss'

// MenuLink props interface
interface IMenuLinkProps {
  linkName: string
  linkurl: string
}

function defineRoute(linkurl: string): string {
  if (linkurl === 'faq') {
    return '/faq'
  }
  return `/category/${linkurl}`
}

const MenuLink: React.FC<IMenuLinkProps> = ({ linkName, linkurl }) => {
  const fetchGoods = (linkurl: string) => {
    axios.get('/category/shirts').then((resp) => {
      console.log(resp)
    })
  }

  return (
    <li className="menu-item">
      <Link
        to={(location) => ({ ...location, pathname: defineRoute(linkurl) })}
        className="menu-link"
        onClick={() => fetchGoods(linkurl)}
      >
        {linkName}
      </Link>
    </li>
  )
}

export default MenuLink
