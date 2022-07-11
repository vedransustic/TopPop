import React, { memo } from 'react'
import './index.scss'
import { Info } from '../../images'
import { formatSongDuration } from '../../utils/functions'
import { ListItemProps } from './types'

const ListItem = ({ artist, duration, title, handleModal, song }: ListItemProps) => {
  return (
    <div className='list__item'>
      <img src={artist.picture_small} alt='album-cover' className='list__item__album__cover' />
      <h2 className='list__item__title'>{title}</h2>
      <h4 className='list__item__subtitle'>{artist.name}</h4>
      <p className='list__item__duration'>{formatSongDuration(duration)}</p>
      <img src={Info} alt='info' className='list__item__info' onClick={() => handleModal(song)} />
    </div>
  )
}

export default memo(ListItem)
