import styled from 'styled-components'

const SectionIconsStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
`

export default SectionIconsStyled
