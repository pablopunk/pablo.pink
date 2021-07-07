export type LinkType = { url: string }
export type AlignType = 'left' | 'center' | 'right'
export type ButtonType = {
  text?: string
  type?: 'social'
  icon?: string
  link?: LinkType
}
export type ImageType = {
  id: number
  filename: string
  title: string
}
