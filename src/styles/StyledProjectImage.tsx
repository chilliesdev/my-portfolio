import styled from '@emotion/styled'
import { colors, margins } from './defaults/variables'

interface Props {
  background: string
  hover: boolean
  large?: boolean
}

const height = `404px`

export default styled.div<Props>`
  min-height: ${height};
  min-width: ${({ large }) => (large ? `calc(100% + ${margins.large}px)` : `calc(50%)`)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(${({ background }) => background});
  background-size: cover;
  transition: all ease-in-out 1s;

  &:hover {
    background: ${colors.primary};
    /* transform: rotateX(0deg); */
  }

  * {
    opacity: ${({ hover }) => (hover ? 1 : 0)};
    transition: all ease-in-out 500ms;
  }
`
