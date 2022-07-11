import React, { memo } from 'react'
import './index.scss'
import FSpinner from '../../images/Spinner.svg'

const Spinner = () => {
  return (
    <>
      <img src={FSpinner} alt='spinner' className='fSpinner' />
    </>
  )
}

export default memo(Spinner)
