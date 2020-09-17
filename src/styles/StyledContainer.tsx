import styled from '@emotion/styled'
import { margins } from './defaults/variables'

interface Props {
  margin?: 'lg'
}

export default styled.div<Props>`
  position: relative;
  margin: 0 ${({ margin }) => (margin === 'lg' ? margins.large : margins.small)}px;
  width: auto;
`
