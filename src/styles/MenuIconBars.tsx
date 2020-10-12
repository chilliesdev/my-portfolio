import styled from '@emotion/styled'

export default styled.span`
  height: 1px;
  background-color: ${({ theme }) => theme.secondary};
  width: 30px;
  position: relative;
  transition: all ease-in-out 500ms;
`
