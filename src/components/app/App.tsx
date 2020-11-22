// Libs
import React from 'react'

// Components
import Home from '../Home'
import Hits from '../Hits'
import Feedback from '../Feedback'
import Question from '../Question'
import Footer from '../Footer'

// Styles
import './App.scss'

const App: React.FC = () => {
  return (
    <div className="app">
      <Home />
      <Hits />
      <Feedback />
      <Question />
      <Footer />
    </div>
  )
}

export default App
