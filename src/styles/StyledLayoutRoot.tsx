import styled from 'styled-components'

export default styled.div<{ handleIndexPageStyle?: boolean }>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ${props =>
    props.handleIndexPageStyle &&
    `
    height: 100vh;
    width: 100vw;
    overflow: hidden;`}
`
