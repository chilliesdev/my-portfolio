import React from 'react'

import StyledMenuIcon from '../styles/StyledMenuIcon'
import MenuIconBars from '../styles/MenuIconBars'

interface MenuItemProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  open: boolean
}

const MenuIcon: React.FC<MenuItemProps> = ({ open, onClick }) => (
  <StyledMenuIcon open={open} onClick={onClick}>
    <MenuIconBars />
    <MenuIconBars />
    <MenuIconBars />
  </StyledMenuIcon>
)

export default MenuIcon
