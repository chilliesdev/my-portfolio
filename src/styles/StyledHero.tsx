import styled from 'styled-components'
import { margins, breakpoints } from './defaults/variables'

interface Props {
  image: string
  atTop: boolean
}

export default styled.div<Props>`
  min-width: 100vw;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background: linear-gradient(
      ${({ theme }) => (theme.name === 'light' ? `${theme.primary}00, ${theme.primary}00` : `${theme.primary}80, ${theme.primary}80`)}
    ),
    url(${({ image }) => `${image}`}) no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -${margins.large}px;

  /* &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    background: ${props => props.theme.primary};
    opacity: ${({ atTop }) => (atTop ? 0 : 1)};
    transition: all ease-in-out 500ms 500ms;
  } */

  @media screen and (max-width: ${breakpoints.ms}px) {
    margin-left: -${margins.small}px;

  }
`
