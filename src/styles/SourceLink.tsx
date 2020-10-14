import styled from 'styled-components'

import { fonts } from './defaults/variables'

export default styled.a`
  color: ${({ theme }) => theme.secondary};
  font-family: ${fonts.questrial};
  font-size: 1.5rem;
  text-transform: uppercase;
  text-decoration: underline;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`
