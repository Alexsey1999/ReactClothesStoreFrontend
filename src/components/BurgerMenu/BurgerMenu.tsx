// Libs
import React from 'react'
import { slide as Menu } from 'react-burger-menu'

// Components
import Socials from '../Socials'

// Styles
import './BurgerMenu.scss'

// BurgerMenu Props interface
interface IBurgerMenuProps {
  isBurgerMenuOpened: boolean
  closeBurgerMenu: () => void
}

const BurgerMenu: React.FC<IBurgerMenuProps> = ({
  isBurgerMenuOpened,
  closeBurgerMenu,
}) => {
  const burgerLinks: string[] = [
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
    <Menu
      right={true}
      customCrossIcon={false}
      customBurgerIcon={false}
      burgerBarClassName={'burger'}
      isOpen={isBurgerMenuOpened}
      onClose={closeBurgerMenu}
      width={280}
    >
      <ul className="burger-links">
        {burgerLinks.map((link) => (
          <li key={link}>
            <a className="burger-link" href="/">
              {link}
            </a>
          </li>
        ))}
      </ul>
      <Socials inBurger={true} />
    </Menu>
  )
}

export default BurgerMenu
