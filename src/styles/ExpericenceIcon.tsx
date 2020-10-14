import styled from 'styled-components'

export default styled.div`
  height: 16rem;
  width: 1px;
  background: ${({ theme }) => theme.secondary};
  margin-left: 9px;

  /* max-width: 10px; */
  /* display: inline; */

  &::before,
  &::after {
    content: '';
    display: block;
    background: ${({ theme }) => theme.secondary};
    position: relative;
  }

  &::before {
    height: 20px;
    width: 20px;
    border: solid ${({ theme }) => theme.secondary} 1px;
    background: ${({ theme }) => theme.primary};
    right: 9px;
  }

  &::after {
    height: 10px;
    width: 10px;
    left: -4px;
    bottom: 15px;
  }
`
