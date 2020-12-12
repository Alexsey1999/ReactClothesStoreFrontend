// Libs
import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../../axios'

// Redux
import { useDispatch } from 'react-redux'
import { FETCH_GOODS_REQUEST } from '../../store/goods/actions'

import { setCurrentCategory } from '../../store/categories/actions'

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

// function fetchGoodsRequest(linkurl: string) {
//   return axios.get('/category/:categoryName')
// }

const MenuLink: React.FC<IMenuLinkProps> = ({ linkName, linkurl }) => {
  const dispatch = useDispatch()

  // const fetchCategory = (linkurl: string, linkName: string) => {
  //   // dispatch({ type: FETCH_GOODS_REQUEST, linkurl })
  //   // localStorage.setItem('category', JSON.stringify({ linkName, linkurl }))
  //   dispatch(setCurrentCategory({ linkName, linkurl }))
  // }

  return (
    <li className="menu-item">
      <Link
        className="menu-link"
        to={(location) => ({ pathname: defineRoute(linkurl) })}
        // onClick={() => fetchCategory(linkurl, linkName)}
      >
        {linkName}
      </Link>
    </li>
  )
}

export default MenuLink
