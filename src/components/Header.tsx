import * as React from 'react'

import StyledHeader from '../styles/StyledHeader'
import HeaderInner from '../styles/HeaderInner'

import Logo from './Logo'
import ThemeBtn from './ThemeBtn'
import MenuIcon from './MenuIcon'
import HeaderInnerBtnGroup from '../styles/HeaderInnerBtnGroup'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = () => (
  <StyledHeader>
    <HeaderInner>
      <Logo />
      <HeaderInnerBtnGroup>
        <ThemeBtn />
        <MenuIcon />
      </HeaderInnerBtnGroup>
    </HeaderInner>
  </StyledHeader>
)

export default Header
