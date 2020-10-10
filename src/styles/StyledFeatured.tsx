import styled from '@emotion/styled'

interface Props {
  image: string
  open: boolean
}

export default styled.div<Props>`
  min-width: 100vw;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background: ${props => {
      console.log(props.theme.primary)
      return `linear-gradient(${`${props.theme.primary}00`}, ${`${props.theme.primary}00`})`
    }},
    url(${({ image }) => image}) no-repeat;
  background-size: cover;
  z-index: ${({ open }) => (open ? 1 : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: ${({ open }) => (open ? `0` : `-99rem`)};
  transition: all linear 800ms 300ms;
`
