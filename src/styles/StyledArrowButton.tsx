import styled from '@emotion/styled'

import { colors } from './defaults/variables'

export default styled.button`
  color: ${colors.secondary};
  text-transform: uppercase;
  background-color: inherit;
  border: none;
  outline: none;
  padding: 0;
  margin-top: 1rem;
  text-align: left;
  cursor: pointer;
  width: 300px;
  transition: all ease-in-out 300ms;

  &:hover {
    width: 350px;
  }
`
