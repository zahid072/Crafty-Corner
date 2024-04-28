import React from 'react'
import { Helmet } from 'react-helmet'
import Sliders from '../../components/slider/Sliders'


const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Crafty Corner</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
       <div>
        <Sliders/>
       </div>
    </>
  )
}

export default Home
