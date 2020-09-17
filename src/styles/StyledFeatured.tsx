import styled from '@emotion/styled'
import { colors } from './defaults/variables'

interface Props {
  image?: string
  open: boolean
}

export default styled.div<Props>`
  min-width: 100vw;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background: linear-gradient(${colors.primary}80, ${colors.primary}80),
    url(${({ image }) => (image ? `./images/${image}` : `./images/home.jpg`)}) no-repeat;
  background-size: cover;
  /* z-index: ${({ open }) => (open ? 1 : 0)}; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: ${({ open }) => (open ? `0` : `-99rem`)};
  transition: all linear 1s;
`
