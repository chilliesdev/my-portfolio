import styled from '@emotion/styled'
import { colors } from './defaults/variables'

export default styled.textarea`
  display: block;
  background: ${colors.primary}00;
  height: 7rem;
  width: 100%;
  border: solid 1px ${colors.secondary};
  border-top: 0;
  border-left: 0;
  border-right: 0;

  &::placeholder {
    font-weight: bold;
    padding-bottom: 0;
  }

  &:focus {
    outline: none;
    background: ${colors.secondary};
  }
`
