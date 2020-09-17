import * as React from 'react'
import StyledContainer from '../styles/StyledContainer'

interface ContainerProps {
  className?: string
  margin?: 'lg'
}

const Container: React.FC<ContainerProps> = ({ children, className, margin }) => (
  <StyledContainer className={className} margin={margin}>
    {children}
  </StyledContainer>
)

export default Container
