import styled from '@emotion/styled'
import { colors, margins } from './defaults/variables'

interface Props {
  background: string
  hover: boolean
}

const height = `404px`

export default styled.div<Props>`
  min-height: ${height};
  min-width: calc(100% + ${margins.large}px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(${({ background }) => background});
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
