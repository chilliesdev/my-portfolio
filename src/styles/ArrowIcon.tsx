import styled from '@emotion/styled'

export default styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.secondary};
  margin: 1rem 0;
  margin-bottom: 7px;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 1px;
    width: 12px;
    background: ${({ theme }) => theme.secondary};
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
