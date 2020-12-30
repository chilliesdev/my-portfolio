import styled from 'styled-components'
import { breakpoints } from './defaults/variables'

interface Props {
  flexDirectionColumnOnSmScreen?: boolean
}

export default styled.div<Props>`
  display: flex;
  justify-content: space-between;

  a {
    margin: 8px;
  }

  @media screen and (max-width: ${breakpoints.sm}px) {
    ${props => props.flexDirectionColumnOnSmScreen && `flex-direction: column;`
  }

  @media screen and (max-width: ${breakpoints.xs}px) {
    flex-direction: column;
    gap: 1rem;
  }
`
