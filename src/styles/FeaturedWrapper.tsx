import styled from 'styled-components'

interface Props {
  open: boolean
}

const spacing = `1.2rem`

export default styled.div<Props>`
  display: block;
  max-width: 352px;
  position: relative;
  right: ${({ open }) => (open ? `0` : `-99rem`)};
  transition: all ease-in-out 500ms;
  background: none;
  ${props =>
    props.theme.name === 'light' &&
    `
    padding: ${spacing};
    max-width: calc(352px + ${spacing});
  `}
  h2 {
    margin-top: 0;
  }

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
