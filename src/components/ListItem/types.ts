import { Artist, DataItemType } from '../../data/types'

export type ListItemProps = {
  artist: Artist
  duration: number
  title: string
  handleModal: (song: DataItemType) => void
  song: DataItemType
}
