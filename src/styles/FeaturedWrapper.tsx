import styled from 'styled-components'
import { breakpoints } from './defaults/variables'

interface Props {
  open: boolean
}

const spacing = `1.2rem`

export default styled.div<Props>`
  display: block;
  max-width: 352px;
  position: relative;
  right: ${({ open }) => (open ? `0` : `-99rem`)};
  transition: all ease-in-out 200ms;
  background: none;
  h2 {
    margin-top: 0;
  }

  &::before {
    content: ${props => (props.theme.name === 'light' ? `' '` : `none`)};
    display: block;
    filter: ${props => (props.theme.name === 'light' ? `blur(2px)` : `none`)};
    background: ${props => `${props.theme.primary}90`};
    width: calc(100% + (${spacing} * 2));
    height: calc(100% + ${spacing});
    position: absolute;
    z-index: -1;
    left: -${spacing};
    top: calc(-${spacing} / 2);
  }

  @media screen and (max-width: ${breakpoints.xs}px) {
    max-width: 85%;
    top: -3rem;
  }
`
