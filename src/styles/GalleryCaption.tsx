import styled from 'styled-components'

export default styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  color: ${({ theme }) => theme.secondary};
  background: ${({ theme }) => theme.primary};
  width: 100%;
  height: 1rem;
`
