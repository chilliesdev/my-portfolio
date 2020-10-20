import styled from 'styled-components'
import { margins, breakpoints } from './defaults/variables'

export default styled.div`
  display: flex;
  margin-top: 2rem;
  margin: 0 -${margins.large}px;

  @media screen and (max-width: ${breakpoints.sm}px) {
    display: block;
  }
`
