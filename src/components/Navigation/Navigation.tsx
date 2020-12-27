// Libs
import React from 'react'

// Components
import MenuLink from '../MenuLink'

// Styles
import './Navigation.scss'

import links from './links'

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <ul className="menu">
        {links.map((menuLink, index) => (
          <MenuLink
            key={menuLink.category}
            linkName={menuLink.category}
            linkurl={menuLink.url}
          />
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
