import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, dimensions } from './defaults/variables'

export default styled(Link)`
  color: ${colors.secondary};
  font-size: ${dimensions.fontSize.large}px;

  &:hover {
    text-decoration: none;
  }
`
