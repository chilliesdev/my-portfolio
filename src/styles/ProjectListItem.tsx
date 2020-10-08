import styled from '@emotion/styled'

export default styled.li<{ flex?: boolean }>`
  list-style: none;
  display: ${({ flex }) => (flex ? `flex` : `block`)};
  justify-content: space-evenly;
  margin-bottom: 2rem;
`
