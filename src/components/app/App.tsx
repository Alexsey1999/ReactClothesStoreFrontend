// Libs
import React from 'react'

// Components
import Home from '../Home'
import Hits from '../Hits'
import Feedback from '../Feedback'

// Styles
import './App.scss'

const App: React.FC = () => {
  return (
    <div className="app">
      <Home />
      <Hits />
      <Feedback />
    </div>
  )
}

export default App
