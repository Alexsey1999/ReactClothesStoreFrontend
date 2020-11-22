// Libs
import React from 'react'

// Components
import MenuLink from '../MenuLink'

// Styles
import './Navigation.scss'

// Navigation props interface
// interface INavigationProps {
//   menuLinks: string[]
// }

const Navigation: React.FC = () => {
  const menuLinks: string[] = [
    'Футболки',
    'Рубашки',
    'Худи',
    'Свитшоты',
    'Шапки',
    'Кепки',
    'Поло',
    'Рюкзаки',
    'Сувениры',
    'FAQ',
  ]

  return (
    <nav className="navigation">
      <ul className="menu">
        {menuLinks.map((menuLink, index) => (
          <MenuLink key={menuLink + index} linkName={menuLink} />
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
