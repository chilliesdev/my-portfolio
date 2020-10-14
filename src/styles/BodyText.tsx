import styled from 'styled-components'

import { colors, dimensions } from './defaults/variables'

export default styled.p`
  color: ${({ theme }) => theme.secondary};
  line-height: ${dimensions.lineHeight.regular};
`
