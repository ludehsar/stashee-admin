import { Typography } from '@mui/material'
import { NextPage } from 'next'

import AppLayout from '../../../layouts/AppLayout'

const DashboardOverview: NextPage = () => {
  return (
    <AppLayout>
      <main>
        <Typography variant="h4">Good Morning</Typography>
      </main>
    </AppLayout>
  )
}

export default DashboardOverview
