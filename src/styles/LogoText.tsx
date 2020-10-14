import styled from 'styled-components'
import { dimensions } from './defaults/variables'

export default styled.span`
  text-transform: capitalize;
  color: ${({ theme }) => theme.secondary};
  font-size: ${dimensions.fontSize.large}px;
  padding-left: 1rem;
`
