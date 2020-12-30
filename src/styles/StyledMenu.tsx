import styled from 'styled-components'
import { fonts } from './defaults/variables'

interface Props {
  open: boolean
}

export default styled.ul<Props>`
  position: fixed;
  top: ${({ open }) => (open ? `0` : `-99rem`)};
  left: 0;
  z-index: 1;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: ${({ open }) => (open ? `100vh` : `auto`)};
  padding-top: 7rem;
  font-family: ${fonts.questrial};
  background: ${({ theme }) => theme.primary};
  transition: all ease-in-out 500ms;
`
