import styled from 'styled-components'

import { breakpoints } from './defaults/variables'

export default styled.div<{ contact?: boolean }>`
  background: ${({ theme }) => theme.secondary};
  border: none;
  border-radius: 50%;
  margin: 0;
  width: 10px;
  height: 10px;
  margin: 1rem;
  margin-bottom: 22px;

  @media screen and (max-width: ${breakpoints.xs}px) {
    ${props => props.contact && `display: none`}
  }
`
