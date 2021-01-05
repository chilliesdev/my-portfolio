import styled from 'styled-components'
import { breakpoints, margins } from './defaults/variables'

export default styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  grid-column: 1 / span2;

  /* @media screen and (max-width: ${breakpoints.sm}px) {
    width: calc(100% + ${margins.large}px);
    margin-left: calc(-${margins.large}px / 2);
  }

  @media screen and (max-width: ${breakpoints.xs}px) {
    width: calc(100% + ${margins.small}px);
    margin-left: calc(-${margins.small}px / 2);
  } */
`
