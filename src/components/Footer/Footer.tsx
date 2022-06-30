import * as React from 'react'
import { Link } from 'react-router-dom'
import FooterStyled from './FooterStyled'

interface FooterProps {
  text: string
  iconFb: React.ReactNode
  iconIg: React.ReactNode
  iconWt: React.ReactNode
}

const Footer: React.FC<FooterProps> = ({ text, iconFb, iconIg, iconWt }) => {
  return (
    <FooterStyled>
      <div>
        <span>{iconFb}</span>
        <span>{iconIg}</span>
        <span>{iconWt}</span>
      </div>
      <article>
        <nav>
          <ul>
            <li>
              <Link to="#">Sobre</Link>
            </li>
            <li>
              <Link to="#">Termos de Uso</Link>
            </li>
            <li>
              <Link to="#">Contato</Link>
            </li>
            <li>
              <Link to="#">Faqs</Link>
            </li>
          </ul>
        </nav>
        <p>{text}</p>
      </article>
    </FooterStyled>
  )
}

export default Footer
