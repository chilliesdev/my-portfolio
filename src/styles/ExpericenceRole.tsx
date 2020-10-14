import styled from 'styled-components'
import { dimensions } from './defaults/variables'

export default styled.p`
  font-size: ${dimensions.fontSize.large}px;
  color: ${({ theme }) => theme.accent};
  text-transform: capitalize;
`
