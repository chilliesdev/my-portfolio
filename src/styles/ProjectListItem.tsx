import styled from 'styled-components'

export default styled.li<{ flex?: boolean }>`
  list-style: none;
  display: ${({ flex }) => (flex ? `flex` : `block`)};
  justify-content: end;
  align-items: center;
  margin-bottom: 2rem;
`
