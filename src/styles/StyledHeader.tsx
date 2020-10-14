import styled from 'styled-components'

import { heights, dimensions } from './defaults/variables'

interface Props {
  atTop: boolean
}

export default styled.header<Props>`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background: ${({ atTop, theme }) => (atTop ? `${theme.primary}00` : theme.primary)};
  position: fixed;
  width: 100%;
  z-index: 2;
  transition: all ease-in-out 500ms;
`
