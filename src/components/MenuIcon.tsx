import React from 'react'

import StyledMenuIcon from '../styles/StyledMenuIcon'
import MenuIconBars from '../styles/MenuIconBars'

const MenuIcon: React.FC = () => (
  <StyledMenuIcon>
    <MenuIconBars />
    <MenuIconBars />
    <MenuIconBars />
  </StyledMenuIcon>
)

export default MenuIcon
