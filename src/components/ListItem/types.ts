import { Artist, DataItemType } from '../SongList/types'

export type ListItemProps = {
  artist: Artist
  duration: number
  title: string
  handleModal: (song: DataItemType) => void
  song: DataItemType
}
