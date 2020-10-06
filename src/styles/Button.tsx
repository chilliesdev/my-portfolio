import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { colors, ColorProps, fonts, dimensions } from './defaults/variables'

interface Props {
  color: string
}

export default styled(Link)<Props>`
  color: ${colors.secondary};
  background: ${({ color }) => (color === 'secondary' ? '#FFFFFF00' : colors[color as keyof ColorProps])};
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: ${({ color }) => colors[color as keyof ColorProps]} solid 1px;
  text-transform: uppercase;
  font-family: ${fonts.dmSans};
  font-size: ${dimensions.fontSize.regular};

  &:hover,
  &:focus {
    text-decoration: none;
    background: ${colors.primary};
    border: ${colors.secondary} solid 1px;
    transition: all ease-in-out 500ms;
  }
`
