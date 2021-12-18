import React from 'react'
import { Badge, Box, Avatar } from '@mui/material'
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
} from '@mui/icons-material'

import {
  MenuButton,
  NavbarContainer,
  NavButton,
  NavToolbar,
} from './Navbar.styled'

interface NavbarProps {
  onSidebarOpen: () => void
}

const Navbar: React.FC<NavbarProps> = ({ onSidebarOpen }) => {
  return (
    <NavbarContainer position="fixed">
      <NavToolbar disableGutters>
        <MenuButton
          size="medium"
          aria-label="menu"
          tabIndex={0}
          type="button"
          onClick={onSidebarOpen}
        >
          <MenuIcon />
        </MenuButton>
        <Box flexGrow={1} />
        <NavButton size="medium" aria-label="menu" tabIndex={0} type="button">
          <SearchIcon />
        </NavButton>
        <NavButton size="medium" aria-label="menu" tabIndex={0} type="button">
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </NavButton>
        <NavButton size="medium" aria-label="menu" tabIndex={0} type="button">
          <Avatar alt="John Doe" src="/path/to/image" />
        </NavButton>
      </NavToolbar>
    </NavbarContainer>
  )
}

export default Navbar
