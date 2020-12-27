// Libs
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withCookies, CookiesProvider } from 'react-cookie'
import queryString from 'query-string'
import axios from '../../axios'
import { ToastContainer, Flip } from 'react-toastify'

// Redux
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { setLoginToken, setUser } from '../../store/users/actions'

// Layouts
import HomeLayout from '../../layouts/HomeLayout'

// Components
import Hits from '../Hits'
import Feedback from '../Feedback'
import Question from '../Question'
import GoodsLayout from '../../layouts/GoodsLayout'
import FaqAccordion from '../FaqAccordion'
import Goods from '../Goods'
import ProductItem from '../ProductItem'
import ProtectedRoute from '../ProtectedRoute'
import Account from '../Account'
import Booking from '../Booking'
import OrderPage from '../OrderPage'
import NotFound from '../NotFound'

// Styles
import './App.scss'

const App: React.FC = () => {
  const { jwt } = useSelector((state: RootStateOrAny) => state.users)

  const dispatch = useDispatch()

  useEffect(() => {
    const getUser = async () => {
      try {
        const googleAuth: any =
          queryString.parse(window.location.search).googleauth || null
        const vkAuth: any =
          queryString.parse(window.location.search).vkauth || null

        if (googleAuth && !localStorage.getItem('googleId')) {
          localStorage.setItem('googleId', googleAuth)
          dispatch(setLoginToken(googleAuth))

          window.location.href = 'http://localhost:3000/account'
          return
        }

        if (vkAuth && !localStorage.getItem('vkId')) {
          localStorage.setItem('vkId', vkAuth)

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
  }, [dispatch])

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

          <Switch>
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
                vkId: localStorage.getItem('vkId') || null,
              }}
              component={Account}
            />

            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </CookiesProvider>
  )
}

export default withCookies(App)
