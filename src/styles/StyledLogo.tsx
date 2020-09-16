import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors } from './defaults/variables'

export default styled(Link)`
  color: ${colors.secondary};

  &:hover,
  &:focus {
    text-decoration: none;
  }
`
