import React, { memo } from 'react'
import './index.scss'
import { Close } from '../../images'
import { formatSongDuration } from '../../utils/functions'
import { ModalProps } from './types'

const Modal = ({ closeModal, rank, cover, title, artistName, duration, preview }: ModalProps) => {
  return (
    <>
      <div className='modal'>
        <img src={Close} alt='image' className='modal__close__icon' onClick={closeModal} />
        <img src={cover} alt='image' className='modal__img' />
        <div className='modal__title'>
          <h3 className='modal__title__rank'>#{rank}</h3>
          <h2 className='modal__title__title'>{title}</h2>
          <h3 className='modal__title__artist'>{artistName}</h3>
        </div>
        <div className='modal__prev'>
          <p className='modal__prev__duration'>
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
    </>
  )
}

export default memo(Modal)
