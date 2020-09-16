import styled from '@emotion/styled'

interface Props {
  open: boolean
}

export default styled.div<Props>`
  display: block;
  max-width: 352px;
  position: relative;
  left: ${({ open }) => (open ? `0` : `-99rem`)};
  transition: all ease-in-out 800ms;
`
