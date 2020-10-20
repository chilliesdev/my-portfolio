import styled from 'styled-components'

interface Props {
  default?: boolean
  flex?: boolean
  transformValue?: string | false
  removeMargin?: boolean
}

export default styled.img<Props>`
  height: 25px;
  width: 25px;
  transform: ${props => props.transformValue && props.transformValue};
  margin-right: ${props => (props.removeMargin ? `0` : `8px`)};
  transition: transform ease-in-out 500ms 500ms;
  ${props => props.flex && `display: flex;`}
  ${props => {
    let value = ''
    if (props.theme.invert && !props.default) {
      value = `filter: invert(1);`
    }
    return value
  }};
`
