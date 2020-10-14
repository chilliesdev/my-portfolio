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
`
