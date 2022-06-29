import styled from 'styled-components'
// eslint-disable-next-line
import img1 from '../../assets/images/img-banner.jpg'

interface BannerStyledProps {
  bannerHeigth?: boolean
  fSize?: boolean
}

const BannerStyled = styled.div<BannerStyledProps>`
  background-image: url(${img1});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: ${(props) => (props.bannerHeigth ? '200px' : '400px')};
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #fff;
    font-size: ${(props) => (props.fSize ? '2em' : '4em')};
    font-family: 'Nothing You Could Do', cursive;
    text-shadow: 2px 2px #3333339a;
  }
`
export default BannerStyled
