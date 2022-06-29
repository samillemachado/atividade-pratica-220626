import * as React from 'react'
import { BsBookmarkHeart, BsBook } from 'react-icons/bs'
import { SiIfood } from 'react-icons/si'
import ContainerIcon from '../ContainerIcon/ContainerIcon'
import SectionIconsStyled from './SectionIconsStyled'

const SectionIcons: React.FC = () => {
  return (
    <SectionIconsStyled>
      <ContainerIcon
        icon={<BsBookmarkHeart />}
        titulo="Ingredientes selecionados"
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <ContainerIcon
        icon={<BsBook />}
        titulo="Conheça nosso cardápio"
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <ContainerIcon
        icon={<SiIfood />}
        titulo="Faça seu pedido"
        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </SectionIconsStyled>
  )
}

export default SectionIcons
