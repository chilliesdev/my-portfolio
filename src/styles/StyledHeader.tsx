import styled from 'styled-components'

import { heights, dimensions } from './defaults/variables'

interface Props {
  atTop: boolean
}

const setBackground = (atTop: boolean, theme: { primary: string; name: string }) => {
  let background = ``

  if (atTop) {
    if (theme.name === 'light') {
      background = theme.primary
    } else {
      background = `${theme.primary}00`
    }
  } else {
    background = theme.primary
  }
  return background
}

export default styled.header<Props>`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background: ${({ atTop, theme }) => setBackground(atTop, theme)};
  position: fixed;
  width: 100%;
  z-index: 2;
  transition: all ease-in-out 500ms;
`
