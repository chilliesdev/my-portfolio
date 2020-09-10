import styled from '@emotion/styled'
import { transparentize } from 'polished'

import { heights, dimensions, colors } from './defaults/variables'

export default styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.primary};
  color: ${transparentize(0.5, colors.secondary)};
`
