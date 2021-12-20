import { Box, Container, Typography } from '@mui/material'
import { NextPage } from 'next'

import { AppLayout } from '../../layouts'

const DashboardOverview: NextPage = () => {
  return (
    <AppLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Typography variant="h4">Good Morning</Typography>
        </Container>
      </Box>
    </AppLayout>
  )
}

export default DashboardOverview
