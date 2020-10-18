import styled from 'styled-components'

interface Props {
  open: boolean
}

export default styled.div<Props>`
  display: block;
  max-width: 352px;
  position: relative;
  right: ${({ open }) => (open ? `0` : `-99rem`)};
  transition: all ease-in-out 500ms;
  background: ${props => (props.theme.name === 'light' ? props.theme.primary : `none`)};
  ${props =>
    props.theme.name === 'light' &&
    `
    padding: 1.2rem;
    max-width: calc(352px + 1.2rem);
  `}

  h2 {
    margin-top: 0;
  }
`
