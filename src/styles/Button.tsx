import styled from 'styled-components'
import { Link } from 'gatsby'

import { ColorProps, fonts, dimensions } from './defaults/variables'

interface Props {
  color: string
}

export default styled(Link)<Props>`
  color: ${({ theme }) => theme.secondary};
  background: ${({ color, theme }) => (color === 'secondary' ? '#FFFFFF00' : theme[color as keyof ColorProps])};
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: ${({ color, theme }) => theme[color as keyof ColorProps]} solid 1px;
  text-transform: uppercase;
  font-family: ${fonts.dmSans};
  font-size: ${dimensions.fontSize.regular};

  &:hover,
  &:focus {
    text-decoration: none;
    background: ${({ theme }) => (theme.name === 'light' ? theme.secondary : theme.primary)};
    border: ${({ theme }) => theme.secondary} solid 1px;
    transition: all ease-in-out 500ms;
  }
`
