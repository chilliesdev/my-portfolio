import React from 'react'

import Icon from '../assets/Logo.svg'

import StyledLogo from '../styles/StyledLogo'
import LogoIcon from '../styles/LogoIcon'
import LogoText from '../styles/LogoText'

const Logo: React.FC = () => (
  <StyledLogo to="/">
    <LogoIcon src={Icon} />
    <LogoText>Matthew Kayode</LogoText>
  </StyledLogo>
)

export default Logo
