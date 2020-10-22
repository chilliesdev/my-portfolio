import styled from 'styled-components'
import { breakpoints } from './defaults/variables'

export default styled.div`
  display: flex;
  justify-content: space-between;

  a {
    margin: 8px;
  }

  @media screen and (max-width: ${breakpoints.xs}px) {
    flex-direction: column;
    gap: 1rem;
  }
`
