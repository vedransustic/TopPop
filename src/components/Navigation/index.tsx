import React, { memo } from 'react'
import './index.scss'
import { Logo } from '../../images'
import { navText } from '../../const'

const Navigation: React.FC = () => {
  return (
    <div className='navigation'>
      <div className='navigation__logo'>
        <img src={Logo} alt='logo' />
      </div>
      <p className='navigation__text'>{navText}</p>
    </div>
  )
}

export default memo(Navigation)
