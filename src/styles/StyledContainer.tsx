import styled from '@emotion/styled'

interface Props {
  margin?: 'lg'
}

export default styled.div<Props>`
  position: relative;
  margin: 0 ${({ margin }) => (margin === 'lg' ? `80px` : `20px`)};
  width: auto;
`
