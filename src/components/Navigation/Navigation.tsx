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

interface IMenuLink {
  category: string
  url: string
}

const Navigation: React.FC = () => {
  const menuLinks: IMenuLink[] = [
    { category: 'Футболки', url: 't-shirts' },
    { category: 'Рубашки', url: 'shirts' },
    { category: 'Худи', url: 'hoodies' },
    { category: 'Свитшоты', url: 'sweatshirts' },
    { category: 'Шапки', url: 'hats' },
    { category: 'Кепки', url: 'caps' },
    { category: 'Поло', url: 'polo' },
    { category: 'Рюкзаки', url: 'bags' },
    { category: 'Сувениры', url: 'souvenirs' },
    { category: 'FAQ', url: 'faq' },
  ]

  return (
    <nav className="navigation">
      <ul className="menu">
        {menuLinks.map((menuLink, index) => (
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
