import styled from 'styled-components'

const ContainerIconStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 150px 0;
  color: ${(props) => props.theme.color};

  span {
    font-size: 60px;
    color: ${(props) => props.theme.primary};
  }

  h2 {
    font-family: 'Nothing You Could Do', cursive;
    font-size: 2em;
    padding-top: 20px;
    padding-bottom: 10px;
  }
`

export default ContainerIconStyled
