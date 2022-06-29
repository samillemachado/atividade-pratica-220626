import React from 'react'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import Banner from '../components/Banner/Banner'
import SectionContent from '../components/SectionContent/SectionContent'
import SectionIcons from '../components/SectionIcons/SectionIcons'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import Footer from '../components/Footer/Footer'

const Home: React.FC = () => {
  return (
    <>
      <Banner titulo="Minha primeira página ReactJs." />
      <SectionIcons />
      {/* <Banner titulo="Assine nossa newsletter e receba promoções exclusivas!" /> */}
      <SectionContent
        titulo="Titulo Um"
        texto="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam possimus totam, saepe incidunt temporibus deserunt veritatis ipsam tenetur repudiandae beatae vitae repellendus quia accusamus eveniet cumque, tempora dolorum ducimus dignissimos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam possimus totam, saepe incidunt temporibus deserunt veritatis ipsam tenetur repudiandae beatae vitae repellendus quia accusamus eveniet cumque, tempora dolorum ducimus dignissimos."
        imagem={img2}
      />
      <SectionContent
        reverse
        titulo="Titulo Dois"
        texto="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam possimus totam, saepe incidunt temporibus deserunt veritatis ipsam tenetur repudiandae beatae vitae repellendus quia accusamus eveniet cumque, tempora dolorum ducimus dignissimos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam possimus totam, saepe incidunt temporibus deserunt veritatis ipsam tenetur repudiandae beatae vitae repellendus quia accusamus eveniet cumque, tempora dolorum ducimus dignissimos."
        imagem={img3}
      />
      <SectionContent
        titulo="Titulo Três"
        texto="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam possimus totam, saepe incidunt temporibus deserunt veritatis ipsam tenetur repudiandae beatae vitae repellendus quia accusamus eveniet cumque, tempora dolorum ducimus dignissimos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam possimus totam, saepe incidunt temporibus deserunt veritatis ipsam tenetur repudiandae beatae vitae repellendus quia accusamus eveniet cumque, tempora dolorum ducimus dignissimos."
        imagem={img4}
      />
      <Banner
        titulo="Assine nossa newsletter e receba promoções exclusivas!"
        footer
        fonteFooter
      />
      <Footer
        text="Desenvolvido por Samille B. Machado para Programa Full Starter - Growdev - 2022"
        iconFb={<BsFacebook />}
        iconIg={<BsInstagram />}
        iconWt={<BsWhatsapp />}
      />
    </>
  )
}

export default Home
