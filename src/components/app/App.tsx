// Libs
import React from 'react'

// Components
import Home from '../Home'
import Hits from '../Hits'

// Styles
import './App.scss'

const App: React.FC = () => {
  return (
    <div className="app">
      <Home />
      <Hits />
    </div>
  )
}

export default App
