import styled from '@emotion/styled'
import { colors, fonts } from './defaults/variables'

export default styled.h4`
  color: ${colors.secondary};
  font-family: ${fonts.dmSans};
  text-transform: capitalize;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`
