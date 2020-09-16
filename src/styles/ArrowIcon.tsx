import styled from '@emotion/styled'
import { colors } from './defaults/variables'

export default styled.div`
  height: 1px;
  width: 100%;
  background: ${colors.secondary};
  margin: 1rem 0;
  margin-bottom: 7px;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 1px;
    width: 12px;
    background: ${colors.secondary};
    position: relative;
    left: calc(100% - 11px);
  }

  &::before {
    transform: rotate(45deg);
    bottom: 4px;
  }

  &::after {
    transform: rotate(-45deg);
    top: 3px;
  }
`
