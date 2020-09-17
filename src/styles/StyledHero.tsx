import styled from '@emotion/styled'
import { colors } from './defaults/variables'

interface Props {
  image: string
  atTop: boolean
}

export default styled.div<Props>`
  min-width: 100vw;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background: linear-gradient(${colors.primary}80, ${colors.primary}80), url(${({ image }) => `./images/${image}`}) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -20px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: ${colors.primary};
    margin: 0;
    padding: 0;
    opacity: ${({ atTop }) => (atTop ? 0 : 1)};
    transition: all ease-in-out 500ms;
  }
`
