import styled from 'styled-components'
import { Link } from 'gatsby'

export default styled(Link)`
  color: ${({ theme }) => theme.secondary};
  outline: none;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`
