import styled from 'styled-components'

interface Props {
  background: string
  hover: boolean
}

export default styled.div<Props>`
  background: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  opacity: ${props => (props.hover ? 1 : 0)};
  transform: translate
  transition: 0.3s ease-in-out all;
`
