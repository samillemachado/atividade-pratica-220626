import styled from 'styled-components'

const FooterStyled = styled.div`
  background-color: #333;
  color: #fff;
  min-height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  span {
    font-size: 1.8rem;
    padding-right: 15px;
    color: #f8b632;
  }

  li {
    list-style: none;
    display: inline-flex;
    margin: 10px 25px;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: #f8b632;
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  p {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-size: 0.7rem;
    font-weight: 100;
  }
`

export default FooterStyled
