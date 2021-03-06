import styled from 'styled-components'
import { breakpoints } from './defaults/variables'

export default styled.button`
  color: ${props => props.theme.secondary};
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
    width: calc(350px - 1.2rem);
  }

  @media screen and (max-width: ${breakpoints.xs}px) {
    width: 255px;

    &:hover {
      width: calc(255px - 1.2rem);
    }
  }
`
