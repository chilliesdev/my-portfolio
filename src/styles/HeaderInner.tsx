import styled from 'styled-components'
import { breakpoints, margins } from './defaults/variables'
import Container from '../components/Container'

export default styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  @media screen and (max-width: ${breakpoints.xs}px) {
    margin: 0 ${margins.small}px;
  }
`
