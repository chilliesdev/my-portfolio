import styled from '@emotion/styled'
import { dimensions } from './defaults/variables'

export default styled.p`
  font-size: ${dimensions.fontSize.large}px;
  color: ${({ theme }) => theme.accent};
  text-transform: capitalize;
`
