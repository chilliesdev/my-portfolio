import styled from 'styled-components'
import { fonts } from './defaults/variables'

export default styled.h1`
  color: ${({ theme }) => theme.secondary};
  font-family: ${fonts.dmSans};
  text-transform: capitalize;
  padding: 1rem;
  z-index: 1;
  position: relative;

  &::before {
    content: ${props => (props.theme.name === 'light' ? `' '` : `none`)};
    display: block;
    filter: ${props => (props.theme.name === 'light' ? `blur(2px)` : `none`)};
    background: ${props => `${props.theme.primary}90`};
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
  }
`
