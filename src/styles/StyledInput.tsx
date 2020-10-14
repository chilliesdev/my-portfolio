import styled from 'styled-components'

export default styled.input`
    background: ${({ theme }) => theme.primary}00;
  height: 2rem;
  width: 100%;
  border: solid 1px ${({ theme }) => theme.secondary};
  border-top: 0;
  border-left: 0;
  border-right: 0;

  &::placeholder {
    font-weight: bold;
    padding-bottom: 0;

  &:focus {
    outline: none;
    background: ${({ theme }) => theme.secondary};
  }
`
