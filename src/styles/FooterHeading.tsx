import styled from '@emotion/styled'

import { fonts } from './defaults/variables'

export default styled.h4`
  color: ${({ theme }) => theme.secondary};
  font-family: ${fonts.dmSans};
`
