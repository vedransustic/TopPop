export const formatSongDuration: (duration: number) => string = (duration) => {
  const min = Math.floor(duration / 60)
  const sec = duration - min * 60 < 10 ? `0${duration - min * 60}` : duration - min * 60
  return `${min}:${sec}`
}
