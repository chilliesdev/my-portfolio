import styled from '@emotion/styled'

import { colors, fonts } from './defaults/variables'

export default styled.a`
  color: ${colors.secondary};
  font-family: ${fonts.questrial};
  font-size: 1.5rem;
  text-transform: uppercase;
  text-decoration: underline;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`
