import React from 'react'
import './index.css'
import { AudioPlayer } from '..'

const Modal = ({ closeModal, rank, cover, title, artist, duration, preview }: any) => {
  return (
    <div className='modal-screen' onClick={closeModal}>
      <div className='modal-container'>
        <img src={cover} alt='image' />
        <h3>#{rank}</h3>
        <h2>{title}</h2>
        <h3>{artist}</h3>
        <p>duration: {duration}</p>
        <div>
          <p>preview</p>
          <AudioPlayer track={preview} />
        </div>
      </div>
    </div>
  )
}

export default Modal
