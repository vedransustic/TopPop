import React from 'react'
import './index.css'
import { Audio } from '../../images'
import { heroSubtitle, heroTitle } from '../../const'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-titles'>
        <h2 className='hero-header'>{heroTitle}</h2>
        <h4 className='hero-subtitle'>{heroSubtitle}</h4>
      </div>
      <img src={Audio} alt='audio' className='hero-img' />
    </div>
  )
}

export default Hero
