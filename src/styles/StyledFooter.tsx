import styled from 'styled-components'

import { dimensions, breakpoints, margins } from './defaults/variables'

export default styled.footer`
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: none;
  color: ${({ theme }) => theme.secondary};
  display: flex;
  flex-direction: column;
  width: fit-content;
  position: relative;
  z-index: 1;

  &::after {
    content: ${props => (props.theme.name === 'light' ? `' '` : `none`)};
    display: block;
    filter: ${props => (props.theme.name === 'light' ? `blur(2px)` : `none`)};
    background: ${props => `${props.theme.primary}90`};
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    width: 100%;
  }

  @media screen and (max-width: ${breakpoints.ms}px) {
    margin-bottom: -${margins.small}px;
  }
`
