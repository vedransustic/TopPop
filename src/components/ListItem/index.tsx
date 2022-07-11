import React, { memo } from 'react'
import './index.css'
import { Info } from '../../images'
import { formatSongDuration } from '../../utils/functions'
import { ListItemProps } from './types'

const ListItem = ({ artist, duration, title, handleModal, song }: ListItemProps) => {
  return (
    <div className='list-item'>
      <img src={artist.picture_small} alt='album-cover' className='album-cover' />
      <h2 className='title'>{title}</h2>
      <h4 className='subtitle'>{artist.name}</h4>
      <p className='duration'>{formatSongDuration(duration)}</p>
      <img src={Info} alt='info' className='info' onClick={() => handleModal(song)} />
    </div>
  )
}

export default memo(ListItem)
