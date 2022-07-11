import React, { memo } from 'react'
import './index.css'
import { footerText } from '../../const'

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <p className='footer-text'>&#169; {footerText}</p>
    </footer>
  )
}

export default memo(Footer)
