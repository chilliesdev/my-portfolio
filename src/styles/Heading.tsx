import styled from 'styled-components'

import { fonts } from './defaults/variables'

export default styled.h2`
  color: ${({ theme }) => theme.secondary};
  font-family: ${fonts.dmSans};
  text-transform: capitalize;
`
