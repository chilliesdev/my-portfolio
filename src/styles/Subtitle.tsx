import styled from '@emotion/styled'

import { fonts } from './defaults/variables'

export default styled.p`
  color: ${({ theme }) => theme.secondary};
  font-family: ${fonts.dmSans};
  font-weight: bold;
`
