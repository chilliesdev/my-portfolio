import styled from 'styled-components'
import { fonts, dimensions, breakpoints } from './defaults/variables'

interface Props {
  source: string
  resolution: {
    height: number | null | undefined
    width: number | null | undefined
  }
  caption?: string
}

export default styled.div<Props>`
  width: ${({ resolution }) => resolution?.width}px;
  height: ${({ resolution }) => resolution?.height}px;
  background: url(${({ source }) => `'${source}' `});
  background-position: center;
  background-size: cover;
  min-width: 50%;

  @media screen and (max-width: ${breakpoints.ms}px) {
    min-width: 100%;
  }

  &::after {
    content: ${({ caption }) => caption && `'${caption}' `};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${fonts.questrial};
    font-size: ${dimensions.fontSize.regular}px;
    color: ${({ theme }) => theme.secondary};
    background: ${({ theme }) => (theme.name === 'light' ? `${theme.primary}90` : `${theme.primary}90`)};
    width: 100%;
    min-height: 4rem;
    position: relative;
    top: calc(${({ resolution }) => `${resolution.height}px - 5rem`});
  }
`
