import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../pages/shared/Navbar/Nav'
import Footer from '../pages/shared/footer/Footer'

const Root = () => {
  return (
    <div>
        <div>
          <Nav/>
        </div>
      <div>
        <Outlet/>
      </div>
      <div>
       <Footer/>
      </div>
    </div>
  )
}

export default Root
