import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({children}) => {
  return (
    <div className="bg-cdark text-cwhite">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout