// Libs
import React from 'react'

// Styles
import './FooterMenu.scss'

const FooterMenu: React.FC = () => {
  const footerMenuLeftLinks: string[] = [
    'Футболки',
    'Рубашки',
    'Худи',
    'Свитшоты',
    'Шапки',
  ]

  const footerMenuRightLinks: string[] = [
    'Кепки',
    'Поло',
    'Рюкзаки',
    'Сувениры',
    'FAQ',
  ]

  return (
    <div className="footer-menu">
      <ul className="footer-left-menu">
        {footerMenuLeftLinks.map((link) => (
          <li key={link}>
            <a href="/">{link}</a>
          </li>
        ))}
      </ul>
      <ul className="footer-right-menu">
        {footerMenuRightLinks.map((link) => (
          <li key={link}>
            <a href="/">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterMenu
