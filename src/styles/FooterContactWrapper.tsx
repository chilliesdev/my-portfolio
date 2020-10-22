import styled from 'styled-components'
import { breakpoints } from './defaults/variables'

export default styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;

  @media screen and (max-width: ${breakpoints.xs}px) {
    display: block;
    margin-top: 1rem;
  }
`
