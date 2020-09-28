import styled from '@emotion/styled'

import { dimensions, colors } from './defaults/variables'

export default styled.footer`
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.primary}00;
  color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  width: fit-content;
  z-index: 1;
`
