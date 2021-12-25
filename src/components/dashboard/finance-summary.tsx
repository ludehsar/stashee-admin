import React from 'react'
import dynamic from 'next/dynamic'
import { Box, Grid, Paper, Typography, useTheme } from '@mui/material'
import { ApexOptions } from 'apexcharts'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const FinanceSummary: React.FC = () => {
  const theme = useTheme()

  const series = [
    {
      data: [
        {
          x: new Date('11 Jan 2021 GMT').getTime(),
          y: 32,
        },
        {
          x: new Date('12 Jan 2021 GMT').getTime(),
          y: 48,
        },
        {
          x: new Date('13 Jan 2021 GMT').getTime(),
          y: 22,
        },
        {
          x: new Date('14 Jan 2021 GMT').getTime(),
          y: 41,
        },
        {
          x: new Date('15 Jan 2021 GMT').getTime(),
          y: 32,
        },
        {
          x: new Date('16 Jan 2021 GMT').getTime(),
          y: 42,
        },
        {
          x: new Date('17 Jan 2021 GMT').getTime(),
          y: 27,
        },
      ],
    },
  ]

  const options: ApexOptions = {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
      width: '100%',
      background: theme.palette.background.paper,
      zoom: {
        enabled: false,
      },
    },
    colors: ['#334AB1'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      type: 'datetime',
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  }

  return (
    <Paper>
      <Grid container xs={12}>
        <Grid
          item
          md={4}
          xs={12}
          sx={(theme) => ({
            p: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            [theme.breakpoints.up('md')]: {
              borderRight: `1px solid ${theme.palette.divider}`,
            },
            [theme.breakpoints.down('md')]: {
              borderBottom: `1px solid ${theme.palette.divider}`,
            },
          })}
        >
          <div>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Sales
            </Typography>
            <Typography color="textPrimary" variant="h5">
              $152,000.00
            </Typography>
            <Typography color="textSecondary" variant="body2">
              vs. $94,000.00 last year
            </Typography>
          </div>
          <Box position="relative">
            <ReactApexChart
              options={options}
              series={series}
              type="area"
              height={100}
            />
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          sx={(theme) => ({
            p: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            [theme.breakpoints.up('md')]: {
              borderRight: `1px solid ${theme.palette.divider}`,
            },
            [theme.breakpoints.down('md')]: {
              borderBottom: `1px solid ${theme.palette.divider}`,
            },
          })}
        >
          <div>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Cost
            </Typography>
            <Typography color="textPrimary" variant="h5">
              $124,000.00
            </Typography>
            <Typography color="textSecondary" variant="body2">
              vs. $82,000.00 last year
            </Typography>
          </div>
          <Box position="relative">
            <ReactApexChart
              options={options}
              series={series}
              type="area"
              width="100%"
              height="auto"
            />
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          sx={{
            p: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Profit
            </Typography>
            <Typography color="textPrimary" variant="h5">
              $28,000.00
            </Typography>
            <Typography color="textSecondary" variant="body2">
              vs. $12,000.00 last year
            </Typography>
          </div>
          <Box position="relative">
            <ReactApexChart
              options={options}
              series={series}
              type="area"
              height={100}
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default FinanceSummary
