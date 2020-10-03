import styled from '@emotion/styled'

export default styled.div`
  display: block;

  &:nth-of-type(odd) {
    .grid-image {
      position: relative;
      right: 80px;
      /* left: 2rem; */
    }
  }

  &:nth-of-type(even) {
    .grid-image {
      position: relative;
      /* right: 3rem; */
      /* left: 80px; */
    }
  }
`
