import styled from '@emotion/styled'

import { colors, dimensions } from './defaults/variables'

export default styled.p`
  color: ${({ theme }) => theme.secondary};
  line-height: ${dimensions.lineHeight.regular};
`
