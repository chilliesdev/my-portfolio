/* eslint-disable no-nested-ternary */
import styled from 'styled-components'

import { heights, dimensions } from './defaults/variables'

interface Props {
  atTop: boolean
}

const setBackground = (atTop: boolean, theme: { primary: string; name: string }) =>
  atTop ? (theme.name === 'light' ? `${theme.primary}00` : `${theme.primary}00`) : theme.primary

export default styled.header<Props>`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background: ${({ atTop, theme }) => setBackground(atTop, theme)};
  position: fixed;
  width: 100%;
  z-index: 2;
  transition: all ease-in-out 500ms;

  &::before {
    content: '';
    display: block;
    filter: ${props => (props.theme.name === 'light' ? `blur(2px)` : `none`)};
    background: ${props => `${props.theme.primary}90`};
    width: 100%;
    height: 100%;
    position: absolute;
  }
`
