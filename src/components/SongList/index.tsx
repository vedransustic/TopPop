import React, { useState } from 'react'
import './index.css'
import { Listening, SearchIcon, SelectIcon } from '../../images'
import { ListItem, Modal } from '..'
import { data } from '../../data'
import { CloseModal, HandleSearch, HandleSort, OpenModal, SelectedSong } from './types'

const SongList = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [selectedSong, setSelectedSong] = useState<SelectedSong>({
    rank: 0,
    cover: '',
    artistName: '',
    title: '',
    duration: 0,
    preview: '',
  })
  const [filteredData, setFilteredData] = useState(data)
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
  const handleSearch: HandleSearch = (searchPhrase) => {
    const newFilterdData = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchPhrase.toLowerCase()) ||
        item.artist.name.toLowerCase().includes(searchPhrase.toLowerCase()),
    )
    setFilteredData(newFilterdData)
  }
  const handleSort: HandleSort = (option) => {
    switch (option) {
      case 'dur-asc':
        setFilteredData([...filteredData.sort((a, b) => a.duration - b.duration)])
        break
      case 'dur-desc':
        setFilteredData([...filteredData.sort((a, b) => b.duration - a.duration)])
        break
      case 'title-alp':
        setFilteredData([
          ...filteredData.sort((a, b) =>
            a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
          ),
        ])
        break
      case 'title-alp-rev':
        setFilteredData([
          ...filteredData.sort((a, b) =>
            b.title.toLowerCase().localeCompare(a.title.toLowerCase()),
          ),
        ])
        break
      default:
        setFilteredData([...filteredData])
    }
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
            filteredData.map((item) => {
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

export default SongList
