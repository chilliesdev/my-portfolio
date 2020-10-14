import styled from 'styled-components'
import { Link } from 'gatsby'
import { dimensions } from './defaults/variables'

export default styled(Link)`
  color: ${({ theme }) => theme.secondary};
  font-size: ${dimensions.fontSize.large}px;

  &:hover,
  &:focus {
    text-decoration: none;
    outline: none;
  }
`
