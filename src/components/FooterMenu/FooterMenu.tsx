// Libs
import React from 'react'
import { Link } from 'react-router-dom'
import { ILink } from '../Navigation/links'
import { defineRoute } from '../MenuLink/MenuLink'

// Styles
import './FooterMenu.scss'

const FooterMenu: React.FC = () => {
  const footerMenuLeftLinks: ILink[] = [
    { category: 'Футболки', url: 't-shirts' },
    { category: 'Рубашки', url: 'shirts' },
    { category: 'Худи', url: 'hoodies' },
    { category: 'Свитшоты', url: 'sweatshirts' },
    { category: 'Шапки', url: 'hats' },
  ]

  const footerMenuRightLinks: ILink[] = [
    { category: 'Кепки', url: 'caps' },
    { category: 'Поло', url: 'polo' },
    { category: 'Рюкзаки', url: 'bags' },
    { category: 'Сувениры', url: 'souvenirs' },
    { category: 'FAQ', url: 'faq' },
  ]

  return (
    <div className="footer-menu">
      <ul className="footer-left-menu">
        {footerMenuLeftLinks.map((link) => (
          <li key={link.category}>
            <Link to={`/category/${link.url}`}>{link.category}</Link>
          </li>
        ))}
      </ul>
      <ul className="footer-right-menu">
        {footerMenuRightLinks.map((link) => (
          <li key={link.category}>
            <Link to={() => ({ pathname: defineRoute(link.url) })}>
              {link.category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterMenu
