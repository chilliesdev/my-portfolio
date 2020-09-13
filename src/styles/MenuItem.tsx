import styled from '@emotion/styled'
import { colors } from './defaults/variables'

export default styled.li`
  text-transform: uppercase;
  list-style: none;
  margin: 1rem 1.5rem;

  &:after {
    content: '';
    position: absolute;
    width: 110px;
    height: 1px;
    background: ${colors.secondary};
  }
`
