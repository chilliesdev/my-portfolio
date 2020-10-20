import styled from 'styled-components'

export default styled.textarea`
  display: block;
  background: ${({ theme }) => theme.primary}00;
  height: 7rem;
  width: 100%;
  border: solid 1px ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.secondary};
  border-top: 0;
  border-left: 0;
  border-right: 0;

  &::placeholder {
    font-weight: bold;
    padding-bottom: 0;
  }

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.secondary};
    background: ${({ theme }) => theme.primary};
  }
`
