import React, { memo } from 'react'
import './index.css'
import { Logo } from '../../images'

const Navigation: React.FC = () => {
  return (
    <div className='navigation'>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>
      <p className='nav-text'>Clover studio</p>
    </div>
  )
}

export default memo(Navigation)
