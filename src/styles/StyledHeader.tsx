import styled from '@emotion/styled'

import { heights, dimensions, colors } from './defaults/variables'

export default styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.primary}00;
  position: fixed;
  width: 100%;
  z-index: 1;
`
