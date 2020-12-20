// @ts-nocheck
// Libs
import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom'
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
import queryString from 'query-string'

// Styles
import './App.scss'
import Account from '../Account'
import { useSelector, useDispatch } from 'react-redux'
import { myContext } from '../../Context'
import {
  setLoginStatusToken,
  setLoginToken,
  setUser,
} from '../../store/users/actions'
import axios from '../../axios'
import { removeJwt } from '../../store/users/actions'
import Booking from '../Booking'

import { Elements, CardElement } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Payment from '../Payment'

import { ToastContainer, Flip } from 'react-toastify'
import OrderPage from '../OrderPage'

const App: React.FC = (props) => {
  const { jwt } = useSelector((state) => state.users)
  // const { user } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const history = useHistory()

  const stripe = loadStripe(
    'pk_test_51Hzfg4EWaRj0TMbRs4RZRHlhStRRbqAltHfCMhcbAA6PKoAYxrSr7CrGIf5K1iBzVmY89UIpQSWltVEizRjxxLhc00xKvE7X6L'
  )

  // const location = useLocation()
  // console.log(location)

  React.useEffect(() => {
    const getUser = async () => {
      try {
        const googleAuth =
          queryString.parse(window.location.search).googleauth || null
        if (googleAuth && !localStorage.getItem('googleId')) {
          localStorage.setItem('googleId', googleAuth)
          dispatch(setLoginToken(googleAuth))

          window.location.href = 'http://localhost:3000/account'
          return
        }
        const response = await axios({
          method: 'GET',
          url: '/user',
        })

        if (!response.data) {
          localStorage.removeItem('jwt')
          return
        }

        dispatch(setUser(response.data))
      } catch (error) {
        console.log(error)
      }
    }

    getUser()
  }, [])

  // React.useEffect(() => {
  //   axios({ method: 'GET', url: '/user' })
  // }, [])

  return (
    <CookiesProvider>
      <Router>
        <div className="app">
          <ToastContainer
            transition={Flip}
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

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

          <Route path="/booking/:orderid/details">
            <GoodsLayout>
              <Booking />
            </GoodsLayout>
          </Route>

          <Route path="/booking/:orderid/payment">
            <GoodsLayout>
              <Payment />
            </GoodsLayout>
          </Route>

          <Route path="/order/browse/:ordertoken">
            <GoodsLayout>
              <OrderPage />
            </GoodsLayout>
          </Route>

          <ProtectedRoute
            path="/account"
            isAuthenticated={{
              jwt,
              googleId: localStorage.getItem('googleId') || null,
            }}
            component={Account}
          />
        </div>
      </Router>
    </CookiesProvider>
  )
}

export default withCookies(App)
