import styled from 'styled-components'
import { fonts } from './defaults/variables'

export default styled.h4`
  color: ${({ theme }) => theme.secondary};
  font-family: ${fonts.dmSans};
  text-transform: capitalize;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`
