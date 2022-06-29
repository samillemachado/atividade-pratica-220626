import * as React from 'react'
import BannerStyled from './BannerStyled'

interface BannerProps {
  titulo: string
  footer?: boolean
  fonteFooter?: boolean
}

const Banner: React.FC<BannerProps> = ({ titulo, footer, fonteFooter }) => {
  return (
    <BannerStyled bannerHeigth={footer} fSize={fonteFooter}>
      <h1>{titulo}</h1>
    </BannerStyled>
  )
}

export default Banner
