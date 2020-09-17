import styled from '@emotion/styled'

import { heights, dimensions, colors } from './defaults/variables'

interface Props {
  atTop: boolean
}

export default styled.header<Props>`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background: ${({ atTop }) => (atTop ? `${colors.primary}00` : colors.primary)};
  position: fixed;
  width: 100%;
  z-index: 2;
  transition: all ease-in-out 500ms;
`
