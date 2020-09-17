import styled from '@emotion/styled'
import { colors } from './defaults/variables'

export default styled.div`
  height: 16rem;
  width: 1px;
  background: ${colors.secondary};
  margin-left: 9px;

  /* max-width: 10px; */
  /* display: inline; */

  &::before,
  &::after {
    content: '';
    display: block;
    background: ${colors.secondary};
    position: relative;
  }

  &::before {
    height: 20px;
    width: 20px;
    border: solid ${colors.secondary} 1px;
    background: ${colors.primary};
    right: 9px;
  }

  &::after {
    height: 10px;
    width: 10px;
    left: -4px;
    bottom: 15px;
  }
`
