import { FunctionComponent } from 'react'
import { AlignType } from 'storyblok/types'

type Props = {
  blok: {
    text: string
    align?: AlignType
    size?: 'lg' | 'md' | 'sm'
    heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  }
}

export const Title: FunctionComponent<Props> = ({ blok }) => {
  let style = 'w-full my-2 font-semibold '
  let align, size

  switch (blok.align) {
    case 'left':
      align = 'text-left'
      break
    case 'right':
      align = 'text-right'
      break
    case 'center':
      align = 'text-center'
      break
    default:
      align = 'text-left'
      break
  }

  switch (blok.size) {
    case 'sm':
      size = 'text-lg'
      break
    case 'md':
      size = 'text-2xl'
      break
    case 'lg':
      size = 'text-4xl'
      break
    default:
      size = 'text-2xl';
      break
  }

  style = `${style} ${align} ${size}`

  switch (blok.heading) {
    case 'h1':
      return <h1 className={style}>{blok.text}</h1>
    case 'h2':
      return <h2 className={style}>{blok.text}</h2>
    case 'h3':
      return <h3 className={style}>{blok.text}</h3>
    case 'h4':
      return <h4 className={style}>{blok.text}</h4>
    case 'h5':
      return <h5 className={style}>{blok.text}</h5>
    case 'h6':
      return <h6 className={style}>{blok.text}</h6>
  }

  return <h5 className={style}>{blok.text}</h5>
}
