// @ts-nocheck
import React from 'react'
import { slide as Menu } from 'react-burger-menu'

import './BurgerMenu.scss'

const BurgerMenu = ({ isBurgerMenuOpened, closeBurgerMenu, burgerLinks }) => {
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
      {burgerLinks.map((link) => (
        <a key={link} className="burger-link" href="">
          {link}
        </a>
      ))}
    </Menu>
  )
}

export default BurgerMenu
