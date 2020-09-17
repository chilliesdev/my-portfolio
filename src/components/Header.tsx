import * as React from 'react'
import useScrollHandler from '../hooks/useScrollHandler'

import StyledHeader from '../styles/StyledHeader'
import HeaderInner from '../styles/HeaderInner'

import Logo from './Logo'
import ThemeBtn from './ThemeBtn'
import Menu from './Menu'
import HeaderInnerBtnGroup from '../styles/HeaderInnerBtnGroup'

const Header: React.FC = () => {
  const atTop: boolean = useScrollHandler()

  return (
    <StyledHeader atTop={atTop}>
      <HeaderInner>
        <Logo />
        <HeaderInnerBtnGroup>
          <ThemeBtn />
          <Menu />
        </HeaderInnerBtnGroup>
      </HeaderInner>
    </StyledHeader>
  )
}

export default Header
