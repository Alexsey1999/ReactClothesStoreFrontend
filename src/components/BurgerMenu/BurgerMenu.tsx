// Libs
import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'

// Components
import Socials from '../Socials'

// Redux
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { closeBurgerMenu } from '../../store/modals/actions'

// Styles
import './BurgerMenu.scss'

import links from '../Navigation/links'
import { defineRoute } from '../MenuLink/MenuLink'

const BurgerMenu: React.FC = () => {
  const { isBurgerMenuOpened } = useSelector(
    (state: RootStateOrAny) => state.modals
  )

  const dispatch = useDispatch()

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
        {links.map((link) => (
          <li key={link.category}>
            <Link
              className="burger-link"
              onClick={() => dispatch(closeBurgerMenu())}
              to={() => ({ pathname: defineRoute(link.url) })}
            >
              {link.category}
            </Link>
          </li>
        ))}
      </ul>
      <Socials inBurger={true} />
    </Menu>
  )
}

export default BurgerMenu
