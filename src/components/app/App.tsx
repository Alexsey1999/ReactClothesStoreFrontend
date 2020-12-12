// @ts-nocheck
// Libs
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Cookies from 'universal-cookie'

// Layouts
import HomeLayout from '../../layouts/HomeLayout'

// Components
// import Home from '../Home'
import Hits from '../Hits'
import Feedback from '../Feedback'
import Question from '../Question'
// import Footer from '../Footer'
import GoodsLayout from '../../layouts/GoodsLayout'
// import GoodsItem from '../GoodsItem'
import FaqAccordion from '../FaqAccordion'
import Goods from '../Goods'
import ProductItem from '../ProductItem'
import ProtectedRoute from '../ProtectedRoute'
import { withCookies, CookiesProvider } from 'react-cookie'

// Styles
import './App.scss'
import Account from '../Account'
import { useSelector } from 'react-redux'

const App: React.FC = (props) => {
  const { jwt } = useSelector((state) => state.users)

  return (
    <CookiesProvider>
      <Router>
        <div className="app">
          <Route exact path="/">
            <HomeLayout>
              <Hits />
              <Feedback />
              <Question />
            </HomeLayout>
          </Route>

          <Route path="/category/:categoryName">
            <GoodsLayout>
              <Goods />
            </GoodsLayout>
          </Route>

          <Route
            path="/product/:id"
            render={(routeProps) => {
              return (
                <GoodsLayout isProduct={true}>
                  <ProductItem {...routeProps} />
                </GoodsLayout>
              )
            }}
          />

          <Route path="/faq">
            <GoodsLayout>
              <div className="faq-container">
                <FaqAccordion />
              </div>
            </GoodsLayout>
          </Route>
          <ProtectedRoute
            path="/account"
            isAuthenticated={jwt}
            component={Account}
          />
        </div>
      </Router>
    </CookiesProvider>
  )
}

export default withCookies(App)
