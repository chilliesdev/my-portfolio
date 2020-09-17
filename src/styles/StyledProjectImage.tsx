import styled from '@emotion/styled'
import { colors } from './defaults/variables'

interface Props {
  background: string
  hover: boolean
}

const height = `404px`

export default styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 50%;
  min-height: ${height};
  background: url(./images/${({ background }) => background});
  background-size: cover;
  /* transform: rotateX(180deg); */
  transition: all ease-in-out 1s;

  &:hover {
    background: ${colors.primary};
  }

  * {
    opacity: ${({ hover }) => (hover ? 1 : 0)};
    transition: all ease-in-out 500ms;
  }
`
