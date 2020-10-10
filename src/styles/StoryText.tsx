import styled from '@emotion/styled'

import { fonts, dimensions } from './defaults/variables'

export default styled.p`
  color: ${({ theme }) => theme.secondary};
  font-family: ${fonts.dmSans};
  font-size: ${dimensions.fontSize.regular};
  line-height: ${dimensions.lineHeight.regular};
  font-weight: bold;
`
