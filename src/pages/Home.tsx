import React from 'react'
import Header from '../components/Banner/Banner'
import imgBanner from '../assets/image-bg.jpg'
import SectionIcons from '../components/SectionIcons/SectionIcons'

const Home: React.FC = () => {
  return (
    <>
      <Header
        titulo="Minha primeira aplicação com ReactJS."
        background={imgBanner}
      />
      <SectionIcons />
    </>
  )
}

export default Home
