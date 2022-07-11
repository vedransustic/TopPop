import React, { memo } from 'react'
import './index.scss'
import { footerText } from '../../const'

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <p className='footer__text'>&#169; {footerText}</p>
    </footer>
  )
}

export default memo(Footer)
