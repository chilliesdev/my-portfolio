import styled from '@emotion/styled'

import { colors, ColorProps, fonts, dimensions } from './defaults/variables'

interface Props {
  color: string
}

export default styled.button<Props>`
  color: ${colors.secondary};
  background: ${({ color }) => {
    return color === 'secondary' ? '#FFFFFF00' : colors[color as keyof ColorProps]
  }};
  width: 150px;
  height: 50px;
  border: ${({ color }) => colors[color as keyof ColorProps]} solid 1px;
  text-transform: uppercase;
  font-family: ${fonts.dmSans};
  font-size: ${dimensions.fontSize.regular};
`
