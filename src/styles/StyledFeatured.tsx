import styled from 'styled-components'

interface Props {
  image: string
  open: boolean
}

export default styled.div<Props>`
  min-width: 100vw;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background: ${props =>
      props.theme.name === 'light'
        ? `linear-gradient(${`${props.theme.primary}00`}, ${`${props.theme.primary}00`})`
        : `linear-gradient(${`${props.theme.primary}90`}, ${`${props.theme.primary}90`})`},
    url(${({ image }) => image}) no-repeat;
  background-size: cover;
  background-position: center;
  z-index: ${({ open }) => (open ? 1 : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: ${({ open }) => (open ? `0` : `-99rem`)};
  transition: all linear 400ms 200ms;
`
