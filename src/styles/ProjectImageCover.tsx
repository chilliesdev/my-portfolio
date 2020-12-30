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
  opacity: 1;
  transform: translate

  /* ${props =>
    props.hover &&
    `

  `} */

  /* &:hover {
    opacity: 0;
    transition: 0.5s ease-in-out all;
    z-index: -1;
  } */
`
