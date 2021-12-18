import React, { useState } from 'react'
import { Box } from '@mui/material'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { AppLayoutContainer } from './Layout.styled'

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
