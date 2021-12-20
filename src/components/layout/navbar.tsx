import React from 'react'
import {
  Badge,
  Box,
  Avatar,
  IconButton,
  Toolbar,
  styled,
  AppBar,
} from '@mui/material'
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
} from '@mui/icons-material'

interface NavbarProps {
  onSidebarOpen: () => void
}

const NavbarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}))

const Navbar: React.FC<NavbarProps> = ({ onSidebarOpen }) => {
  return (
    <NavbarContainer
      sx={{
        left: {
          lg: 280,
        },
        width: {
          lg: 'calc(100% - 280px)',
        },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: 64,
          left: 0,
          px: 2,
        }}
      >
        <IconButton
          size="medium"
          aria-label="menu"
          tabIndex={0}
          type="button"
          onClick={onSidebarOpen}
          sx={{
            display: {
              xs: 'inline-flex',
              lg: 'none',
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box flexGrow={1} />
        <IconButton
          size="medium"
          aria-label="menu"
          tabIndex={0}
          type="button"
          sx={{ ml: 1 }}
        >
          <SearchIcon />
        </IconButton>
        <IconButton
          size="medium"
          aria-label="menu"
          tabIndex={0}
          type="button"
          sx={{ ml: 1 }}
        >
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Avatar
          alt="John Doe"
          src="/path/to/image"
          sx={{
            height: 40,
            width: 40,
            ml: 1,
          }}
        />
      </Toolbar>
    </NavbarContainer>
  )
}

export default Navbar
