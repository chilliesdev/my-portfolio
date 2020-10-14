import styled from 'styled-components'

import { dimensions } from './defaults/variables'

export default styled.footer`
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${({ theme }) => theme.primary}00;
  color: ${({ theme }) => theme.secondary};
  display: flex;
  flex-direction: column;
  width: fit-content;
  z-index: 1;
`
