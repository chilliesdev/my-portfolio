import styled from '@emotion/styled'
import { colors } from './defaults/variables'

interface Props {
  image?: string
}

export default styled.div<Props>`
  min-width: 100vh;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background: linear-gradient(${colors.primary}80, ${colors.primary}80), url(${({ image }) => image || `./images/home.jpg`}) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
