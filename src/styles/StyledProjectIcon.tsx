import styled from 'styled-components'

export default styled.div`
  display: block;

  &:nth-of-type(odd) {
    .grid-image {
      position: relative;
      right: 80px;
    }
  }

  &:nth-of-type(even) {
    .grid-image {
      position: relative;
    }
  }
`
