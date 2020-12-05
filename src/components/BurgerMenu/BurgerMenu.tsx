// @ts-nocheck
// Libs
import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { useSelector, useDispatch } from 'react-redux'
import { closeBurgerMenu } from '../../store/modals/actions'

// Components
import Socials from '../Socials'

// Styles
import './BurgerMenu.scss'

const BurgerMenu: React.FC = () => {
  const { isBurgerMenuOpened } = useSelector((state) => state.modals)
  const dispatch = useDispatch()
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
      onClose={() => dispatch(closeBurgerMenu())}
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
