import styled from '@emotion/styled'

interface Props {
  display?: 'flex' | 'block'
}

export default styled.div<Props>`
  display: ${({ display }) => display || `grid`};
  grid-template-columns: 45% 45%;
  grid-row-gap: 4rem;
  justify-content: space-between;
  margin: 10rem 0;
`
