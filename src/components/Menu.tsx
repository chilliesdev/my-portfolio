import React, { useState } from 'react'

import MenuIcon from './MenuIcon'
import StyledMenu from '../styles/StyledMenu'
import MenuItem from '../styles/MenuItem'
import MenuLink from '../styles/MenuLink'
import MenuActiveItem from '../styles/MenuActiveItem'

const menuLinks: {
  name: string
  url: string
}[] = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Portfolio', url: '/portfolio' },
  { name: 'contact', url: '/contact' }
]

const Menu: React.FC = () => {
  const active = '/'
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    console.log('clicked')
    setOpen(!open)
  }

  return (
    <>
      <MenuIcon onClick={handleOpen} open={open} />
      <StyledMenu open={open}>
        {menuLinks.map(({ name, url }) => (
          <MenuItem key={name}>
            <MenuLink href={url}>{name}</MenuLink>
            {active === url && <MenuActiveItem />}
          </MenuItem>
        ))}
      </StyledMenu>
    </>
  )
}

export default Menu
