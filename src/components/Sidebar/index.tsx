import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import NextImage from 'next/image'

import {
  Box,
  Divider,
  Drawer,
  List,
  ListSubheader,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material'
import {
  Home as HomeIcon,
  PieChart as PieChartIcon,
  BarChart as BarChartIcon,
} from '@mui/icons-material'
import { NavItem } from '../NavItem'
import Logo from '../../../public/images/logo2.png'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

const items = [
  {
    href: '/dashboard/overview',
    icon: <HomeIcon fontSize="small" />,
    title: 'Overview',
  },
  {
    href: '/dashboard/finance',
    icon: <PieChartIcon fontSize="small" />,
    title: 'Finance',
  },
  {
    href: '/dashboard/analytics',
    icon: <BarChartIcon fontSize="small" />,
    title: 'Analytics',
  },
]

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { open, onClose } = props
  const router = useRouter()
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false,
  })

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (open) {
      onClose?.()
    }
  }, [router.asPath])

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink href="/" passHref>
              <a>
                <NextImage src={Logo} alt="Logo" />
              </a>
            </NextLink>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1,
              }}
            >
              <div>
                <Typography color="inherit" variant="subtitle1">
                  John Doe
                </Typography>
                <Typography color="neutral.400" variant="body2">
                  Support Manager
                </Typography>
              </div>
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <List
            subheader
            sx={{
              listStyle: 'none',
              margin: 0,
              px: 0,
              pt: 0,
              pb: 8,
              position: 'relative',
            }}
          >
            <ListSubheader
              sx={{
                backgroundColor: 'inherit',
                textTransform: 'uppercase',
                p: 0,
                ml: 4,
                lineHeight: 2.5,
                fontSize: '0.75rem',
                fontWeight: 700,
              }}
            >
              Dashboard
            </ListSubheader>
            <List
              sx={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                position: 'relative',
              }}
            >
              {items.map((item) => (
                <NavItem
                  key={item.title}
                  icon={item.icon}
                  href={item.href}
                  title={item.title}
                />
              ))}
            </List>
          </List>
        </Box>
      </Box>
    </>
  )

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    )
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  )
}

export default Sidebar
