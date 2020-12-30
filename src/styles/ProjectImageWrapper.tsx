import styled from 'styled-components'

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 0;
  padding: 1rem;

  &:hover {
    z-index: 1;
  }
`
