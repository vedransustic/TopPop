import React, { useEffect, useState } from 'react'
import './index.css'
import { Listening, SearchIcon, SelectIcon } from '../../images'
import { ListItem, Modal } from '..'
import axios from 'axios'
import { data } from '../../data'

const SongList = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [selectedSong, setSelectedSong] = useState({
    rank: 0,
    cover: '',
    artist: '',
    title: '',
    duration: '',
    preview: '',
  })
  //  const [data, setData] = useState()
  /*   const url = 'https://api.deezer.com/chart'

  const getMusicData = async () => {
    try {
      const response: any = await axios
        .get(url, {
          headers: {
            domain: 'deezer.com',
          },
        })
        .then((res) => {
          console.log(res.data)
        })
      console.log(response)
      //setData(response)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getMusicData()
  }, []) */

  const openModal = (song: any) => {
    setSelectedSong({
      rank: song.rank,
      cover: song.album.cover,
      artist: song.artist.name,
      title: song.title,
      duration: song.duration,
      preview: song.preview,
    })
    setModalVisible(true)
  }
  const closeModal = () => {
    setSelectedSong({
      rank: 0,
      cover: '',
      artist: '',
      title: '',
      duration: '',
      preview: '',
    })
    setModalVisible(false)
  }

  return (
    <>
      <main>
        <img src={Listening} alt='listening' className='song-list-img' />
        <div className='song-list'>
          <div className='filters-container'>
            <div className='search-container'>
              <input type='text' className='search-filter' placeholder='Song or Artist...' />
              <img src={SearchIcon} alt='searchIcon' className='buttonIcon' />
            </div>
            <div className='select-container'>
              <select name='select-filter' id='select-filter' className='select-filter'>
                <option value=''>dadadadad</option>
                <option value=''></option>
                <option value=''></option>
              </select>
              <img src={SelectIcon} alt='select-icon' className='selectIcon' />
            </div>
          </div>
          {data.tracks.data.map((item) => {
            return (
              <ListItem
                key={item.id}
                {...item}
                song={item}
                handleModal={modalVisible ? closeModal : openModal}
              />
            )
          })}
        </div>
      </main>
      {modalVisible && (
        <Modal
          closeModal={closeModal}
          rank={selectedSong.rank}
          cover={selectedSong.cover}
          artist={selectedSong.artist}
          title={selectedSong.title}
          duration={selectedSong.duration}
          preview={selectedSong.preview}
        />
      )}
    </>
  )
}

export default SongList
