import { DataItemType } from '../../data/types'

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
