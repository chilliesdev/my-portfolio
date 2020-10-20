import styled from 'styled-components'
import { breakpoints } from './defaults/variables'

interface Props {
  display?: 'flex' | 'block'
}

export default styled.div<Props>`
  display: ${({ display }) => display || `grid`};
  grid-template-columns: 45% 45%;
  grid-row-gap: 4rem;
  justify-content: space-between;
  margin: 10rem 0;

  @media screen and (max-width: ${breakpoints.sm}px) {
    grid-template-columns: 100%;
  }
`
