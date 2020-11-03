import styled from 'styled-components'

import { dimensions } from './defaults/variables'

export default styled.p`
  color: ${({ theme }) => theme.secondary};
  line-height: ${dimensions.lineHeight.regular};
`
