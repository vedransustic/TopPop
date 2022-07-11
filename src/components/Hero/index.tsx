import React, { memo } from 'react'
import './index.scss'
import { Audio } from '../../images'
import { heroSubtitle, heroTitle } from '../../const'

const Hero: React.FC = () => {
  return (
    <div className='hero'>
      <div className='hero__titles'>
        <h2 className='hero__titles__header'>{heroTitle}</h2>
        <h4 className='hero__titles__subtitle'>{heroSubtitle}</h4>
      </div>
      <img src={Audio} alt='audio' className='hero__img' />
    </div>
  )
}

export default memo(Hero)
