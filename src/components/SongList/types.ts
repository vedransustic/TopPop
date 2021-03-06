export type SelectedSong = {
  rank: number
  cover: string
  artistName: string
  title: string
  duration: number
  preview: string
}

export type OpenModal = (song: DataItemType) => void
export type CloseModal = () => void
export type HandleSearch = (searchPhrase: string) => void
export type HandleSort = (option: string) => void

export type TrackType = {
  tracks: DataType
}

export type DataType = {
  data: Array<DataItemType>
  total: number
}
export type DataItemType = {
  id: number
  title: string
  title_short: string
  title_version: string
  link: string
  duration: number
  rank: number
  explicit_lyrics: boolean
  explicit_content_lyrics: number
  explicit_content_cover: number
  preview: string
  md5_image: string
  position: number
  artist: Artist
  album: Album
  type: string
}

export type Artist = {
  id: number
  name: string
  link: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  radio: boolean
  tracklist: string
  type: string
}

export type Album = {
  id: number
  title: string
  cover: string
  cover_small: string
  cover_medium: string
  cover_big: string
  cover_xl: string
  md5_image: string
  tracklist: string
  type: string
}
