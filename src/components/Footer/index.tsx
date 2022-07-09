import React from 'react'
import './index.css'
import { footerText } from '../../const'

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer-text'>&#169; {footerText}</p>
    </footer>
  )
}

export default Footer
