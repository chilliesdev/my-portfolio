import styled from '@emotion/styled'

import { dimensions } from './defaults/variables'

export default styled.p`
  color: ${({ theme }) => theme.accent};
  line-height: ${dimensions.lineHeight.regular};
`
