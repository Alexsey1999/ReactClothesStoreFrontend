// Libs
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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

// Styles
import './App.scss'

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
            <Goods />
          </GoodsLayout>
        </Route>

        <Route path="/product/:id">
          <GoodsLayout>
            <ProductItem />
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
