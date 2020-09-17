import React from 'react'
import StyledHero from '../styles/StyledHero'
import HeroHeading from '../styles/HeroHeading'
import useScrollHandler from '../hooks/useScrollHandler'

interface Props {
  children: string
  background: string
}

const Hero: React.FC<Props> = ({ children, background }) => {
  const atTop: boolean = useScrollHandler()

  return (
    <StyledHero atTop={atTop} image={background}>
      <HeroHeading>{children}</HeroHeading>
    </StyledHero>
  )
}

export default Hero
