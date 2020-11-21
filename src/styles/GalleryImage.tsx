import styled from 'styled-components'

interface Props {
  caption?: string
}

export default styled.img<Props>`
  width: 50%;

  &::after {
    content: ${({ caption }) => caption && `'${caption}' `};
    display: block;
    color: ${({ theme }) => theme.secondary};
    background: ${({ theme }) => theme.secondary};
    width: 100%;
    min-height: 5rem;
  }
`
