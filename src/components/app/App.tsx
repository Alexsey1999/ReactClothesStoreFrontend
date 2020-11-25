// Libs
import React from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'

// Layouts
import HomeLayout from '../../layouts/HomeLayout'

// Components
import Home from '../Home'
import Hits from '../Hits'
import Feedback from '../Feedback'
import Question from '../Question'
import Footer from '../Footer'

// Styles
import './App.scss'
import GoodsLayout from '../../layouts/GoodsLayout'
import GoodsItem from '../GoodsItem'
import FaqAccordion from '../FaqAccordion'

const App: React.FC = () => {
  return (
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
            <div className="goods-container">
              <div className="goods-row">
                <GoodsItem
                  imageUrl="https://jolybell.com/storage/3z7hyxd15u.png?preview=&width=369&height=405"
                  price={2500}
                  name="Рубашка Black"
                />
              </div>
            </div>
          </GoodsLayout>
        </Route>

        <Route path="/faq">
          <GoodsLayout>
            <div className="faq-container">
              <FaqAccordion />
            </div>
          </GoodsLayout>
        </Route>
      </div>
    </Router>
  )
}

export default App
