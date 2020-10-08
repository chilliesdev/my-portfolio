import styled from '@emotion/styled'
import { dimensions } from './defaults/variables'

interface Props {
  large?: boolean
}

export default styled.span<Props>`
  font-size: ${({ large }) => (large ? dimensions.fontSize.large : dimensions.fontSize.regular)}px;
  height: 100%;
`
