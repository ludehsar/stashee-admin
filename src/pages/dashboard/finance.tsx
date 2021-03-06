import { NextPage } from 'next'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import {
  InsertChart as InsertChartIcon,
  Settings as SettingsIcon,
  Download as DownloadIcon,
} from '@mui/icons-material'

import { AppLayout } from '../../layouts'
import SalesRevenue from '../../components/dashboard/sales-revenue'
import SalesBreakdown from '../../components/dashboard/sales-breakdown'
import FinanceSummary from '../../components/dashboard/finance-summary'

const DashboardFinance: NextPage = () => {
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
          <Grid
            container
            sx={{
              justifyContent: 'space-between',
              mb: 4,
            }}
          >
            <Grid item>
              <Typography variant="h4">Finance</Typography>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                sx={{
                  px: 2,
                  py: 1,
                  m: 1,
                }}
                startIcon={<InsertChartIcon />}
              >
                Report
              </Button>
              <Button
                variant="outlined"
                sx={{
                  px: 2,
                  py: 1,
                  m: 1,
                }}
                startIcon={<SettingsIcon />}
              >
                Settings
              </Button>
              <Button
                variant="contained"
                sx={{
                  px: 2,
                  py: 1,
                  m: 1,
                }}
                startIcon={<DownloadIcon />}
              >
                Export
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item lg={12}>
              <FinanceSummary />
            </Grid>
            <Grid item lg={8} md={6} sm={12}>
              <SalesRevenue />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <SalesBreakdown />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </AppLayout>
  )
}

export default DashboardFinance
