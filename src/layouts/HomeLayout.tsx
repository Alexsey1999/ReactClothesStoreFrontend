// Libs
import React, { ReactNode } from 'react'

// Components
import Footer from '../components/Footer'
import Home from '../components/Home'

const HomeLayout: React.FC<ReactNode> = ({ children }) => {
  return (
    <>
      <Home />
      {children}
      <Footer />
    </>
  )
}

export default HomeLayout
