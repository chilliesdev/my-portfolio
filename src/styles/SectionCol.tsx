import styled from 'styled-components'

interface Props {
  size?: 'lg'
}

export default styled.div<Props>`
  display: block;
  grid-column: ${({ size }) => size && `1/span2`};
`
