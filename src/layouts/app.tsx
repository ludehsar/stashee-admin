import React, { useState } from 'react'
import { Box, styled } from '@mui/material'

import Navbar from '../components/layout/navbar'
import Sidebar from '../components/layout/sidebar'

const AppLayoutContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280,
  },
}))

const AppLayout: React.FC = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true)

  return (
    <>
      <AppLayoutContainer>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {children}
        </Box>
      </AppLayoutContainer>
      <Navbar onSidebarOpen={() => setSidebarOpen(true)} />
      <Sidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} />
    </>
  )
}

export default AppLayout
