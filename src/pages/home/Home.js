import React from 'react'
import Spline from '@splinetool/react-spline';

import './Home.css'
import { Navbar } from '../../components'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      
      {/* Spline container to position it as background */}
      <div className="spline-container">
      <Spline scene="https://prod.spline.design/5fdveFm81xYkyV20/scene.splinecode" />
      </div>
      
      <div className='home-landing page-1'>
        <div className='home-landing_top_right'>
          <p className='home-landing_greet-small'>/mar.ha.ba/</p>
          <p className='home-landing_greet-large'>Hello, مرحبا</p>
          <p className='home-landing_small-intro'>My name is Ahmed and I am an <span className='home-landing_small-intro-role'>AI & ML Engineer</span></p>
        </div>
      </div>
    </div>
  )
}

export default Home
