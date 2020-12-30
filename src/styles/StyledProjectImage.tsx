import styled from 'styled-components'
import { margins } from './defaults/variables'

interface Props {
  background: string
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
  /* background: url(${({ background }) => background});
  background-size: cover;
  transition: all ease-in-out 1s; */

  /* &:hover {
    background: ${({ theme }) => theme.primary};
  }

  * {
    opacity: ${({ hover }) => (hover ? 1 : 0)};
    transition: all ease-in-out 500ms;
  } */
`
