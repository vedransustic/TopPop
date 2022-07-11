import React, { memo, useCallback, useEffect, useState } from 'react'
import './index.css'
import { Listening, SearchIcon, SelectIcon } from '../../images'
import { ListItem, Modal, Spinner } from '..'
import {
  CloseModal,
  DataItemType,
  HandleSearch,
  HandleSort,
  OpenModal,
  SelectedSong,
} from './types'
import axios from 'axios'

const SongList: React.FC = () => {
  const [startData, setStartData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [loading, setLoading] = useState<boolean>(true)
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [selectedSong, setSelectedSong] = useState<SelectedSong>({
    rank: 0,
    cover: '',
    artistName: '',
    title: '',
    duration: 0,
    preview: '',
  })

  useEffect(() => {
    getData().then()
  }, [])

  const getData = async () => {
    await axios(`${import.meta.env.VITE_DOMAIN_PROXY}${import.meta.env.VITE_DOMAIN}`)
      .then((response) => {
        setStartData(response.data.tracks.data)
        setFilteredData(response.data.tracks.data)
      })
      .catch((error) => {
        console.error('ERROR fetching data: ', error)
      })
      .finally(() => setLoading(false))
  }

  const openModal: OpenModal = (song) => {
    setSelectedSong({
      rank: song.rank,
      cover: song.album.cover,
      artistName: song.artist.name,
      title: song.title,
      duration: song.duration,
      preview: song.preview,
    })
    setModalVisible(true)
  }
  const closeModal: CloseModal = () => {
    setSelectedSong({
      rank: 0,
      cover: '',
      artistName: '',
      title: '',
      duration: 0,
      preview: '',
    })
    setModalVisible(false)
  }
  const handleSearch: HandleSearch = useCallback(
    (searchPhrase: string) => {
      const newFilterdData = startData.filter(
        (item: DataItemType) =>
          item.title.toLowerCase().includes(searchPhrase.toLowerCase()) ||
          item.artist.name.toLowerCase().includes(searchPhrase.toLowerCase()),
      )
      setFilteredData(newFilterdData)
    },
    [startData],
  )
  const handleSort: HandleSort = useCallback(
    (option) => {
      switch (option) {
        case 'dur-asc':
          setFilteredData([
            ...filteredData.sort(
              (a: { duration: number }, b: { duration: number }) => a.duration - b.duration,
            ),
          ])
          break
        case 'dur-desc':
          setFilteredData([
            ...filteredData.sort(
              (a: { duration: number }, b: { duration: number }) => b.duration - a.duration,
            ),
          ])
          break
        case 'title-alp':
          setFilteredData([
            ...filteredData.sort((a: { title: string }, b: { title: string }) =>
              a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
            ),
          ])
          break
        case 'title-alp-rev':
          setFilteredData([
            ...filteredData.sort((a: { title: string }, b: { title: string }) =>
              b.title.toLowerCase().localeCompare(a.title.toLowerCase()),
            ),
          ])
          break
        default:
          setFilteredData([...filteredData])
      }
    },
    [filteredData],
  )

  if (loading) {
    return (
      <main>
        <img src={Listening} alt='listening' className='song-list-img' />
        <div className='song-list'>
          <Spinner />
        </div>
      </main>
    )
  }

  return (
    <>
      <main>
        <img src={Listening} alt='listening' className='song-list-img' />
        <div className='song-list'>
          <div className='filters-container'>
            <div className='search-container'>
              <input
                type='text'
                className='search-filter'
                placeholder='Song or Artist...'
                onChange={(e) => handleSearch(e.target.value)}
              />
              <img src={SearchIcon} alt='searchIcon' className='buttonIcon' />
            </div>
            <div className='select-container'>
              <select
                name='select-filter'
                id='select-filter'
                className='select-filter'
                onChange={(e) => handleSort(e.target.value)}
              >
                <option value='dur-asc'>Duration (asc)</option>
                <option value='dur-desc'>Duration (desc)</option>
                <option value='title-alp'>Title</option>
                <option value='title-alp-rev'>Title (rev)</option>
              </select>
              <img src={SelectIcon} alt='select-icon' className='selectIcon' />
            </div>
          </div>
          {filteredData &&
            filteredData.map((item: DataItemType) => {
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
          artistName={selectedSong.artistName}
          title={selectedSong.title}
          duration={selectedSong.duration}
          preview={selectedSong.preview}
        />
      )}
    </>
  )
}

export default memo(SongList)
