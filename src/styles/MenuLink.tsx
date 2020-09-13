import styled from '@emotion/styled'
import { colors, dimensions } from './defaults/variables'

export default styled.a`
  color: ${colors.secondary};
  font-size: ${dimensions.fontSize.large}px;

  &:hover {
    text-decoration: none;
  }
`
