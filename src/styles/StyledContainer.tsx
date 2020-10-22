import styled from 'styled-components'
import { margins, breakpoints } from './defaults/variables'

interface Props {
  margin?: 'lg'
}

export default styled.div<Props>`
  position: relative;
  margin: 0 ${({ margin }) => (margin === 'lg' ? margins.large : margins.small)}px;
  width: auto;

  @media screen and (max-width: ${breakpoints.xs}px) {
    margin: ${margins.small}px;
  }
`
