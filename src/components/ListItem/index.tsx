import React from 'react'
import './index.css'
import { Info } from '../../images'

const ListItem = ({ artist, duration, title, handleModal, song }: any) => {
  const min = Math.floor(duration / 60)
  const sec = duration - min * 60 < 10 ? `0${duration - min * 60}` : duration - min * 60
  const time = `${min}:${sec}`
  return (
    <div className='list-item'>
      <img src={artist.picture_small} alt='album-cover' className='album-cover' />
      <h2 className='title'>{title}</h2>
      <h4 className='subtitle'>{artist.name}</h4>
      <p className='duration'>{time}</p>
      <img src={Info} alt='info' className='info' onClick={() => handleModal(song)} />
    </div>
  )
}

export default ListItem
