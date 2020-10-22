import styled from 'styled-components'
import { breakpoints } from './defaults/variables'

export default styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${breakpoints.xs}px) {
    flex-direction: column;
    gap: 1rem;
  }
`
