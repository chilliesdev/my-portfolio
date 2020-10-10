import styled from '@emotion/styled'
import { Link } from 'gatsby'

export default styled(Link)`
  color: ${({ theme }) => theme.secondary};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`
