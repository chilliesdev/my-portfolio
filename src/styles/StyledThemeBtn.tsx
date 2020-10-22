import styled from 'styled-components'
import { breakpoints } from './defaults/variables'

export default styled.div`
  height: 25px;
  width: 25px;
  margin-right: 4rem;
  cursor: pointer;
  display: flex;
  transition: transform ease-in-out 500ms 500ms;
  overflow: hidden;

  @media screen and (max-width: ${breakpoints.xs}px) {
    margin-right: 1rem;
  }
`
