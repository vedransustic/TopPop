import React, { memo } from 'react'
import './index.css'
import { Close } from '../../images'
import { formatSongDuration } from '../../utils/functions'
import { ModalProps } from './types'

const Modal = ({ closeModal, rank, cover, title, artistName, duration, preview }: ModalProps) => {
  return (
    <div className='modal-screen'>
      <div className='modal-container'>
        <img src={Close} alt='image' className='close-icon' onClick={closeModal} />
        <img src={cover} alt='image' className='modal-img' />
        <div className='container-title'>
          <h3 className='rank'>#{rank}</h3>
          <h2 className='title'>{title}</h2>
          <h3 className='artist'>{artistName}</h3>
        </div>
        <div className='container-prev'>
          <p className='duration'>
            <span>duration:</span>
            <span>{formatSongDuration(duration)}</span>
          </p>
          <audio controls>
            <source src={preview} type='audio/ogg' />
            <source src={preview} type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  )
}

export default memo(Modal)
