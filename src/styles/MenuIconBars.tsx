import styled from 'styled-components'

export default styled.span`
  height: 1px;
  background-color: ${props => props.theme.secondary};
  width: 30px;
  position: relative;
  transition: all ease-in-out 500ms;
`
