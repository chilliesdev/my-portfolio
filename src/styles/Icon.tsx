import styled from 'styled-components'

export default styled.img`
  height: 25px;
  width: 25px;
  margin-right: 8px;
  ${({ theme }) => theme.invert && `filter: invert(1);`}
`
