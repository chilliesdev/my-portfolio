import styled from 'styled-components'
import { breakpoints, margins } from './defaults/variables'

interface Props {
  background: string
  large?: boolean
}

const height = `404px`

export default styled.div<Props>`
  min-height: ${height};
  min-width: ${({ large }) => (large ? `calc(100% + ${margins.large}px)` : `calc(50%)`)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: ${breakpoints.ms}px) {
    min-width: ${({ large }) => (large ? `calc(100% + ${margins.small}px)` : `calc(50%)`)};
  }
`
