import React from 'react'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'
import { Card, CardHeader, Divider, CardContent, useTheme } from '@mui/material'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const SalesBreakdown: React.FC = () => {
  const theme = useTheme()

  const series = [44, 55]

  const options: ApexOptions = {
    chart: {
      type: 'pie',
      toolbar: {
        show: false,
      },
      background: theme.palette.background.paper,
    },
    colors: ['#334AB1', '#6E7AD8'],
    fill: {
      type: 'solid',
      opacity: 1,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
    },
    labels: ['Subscriptions', 'Services'],
  }

  return (
    <Card>
      <CardHeader title="Sales Breakdown" />
      <Divider />
      <CardContent>
        <ReactApexChart
          options={options}
          series={series}
          type="pie"
          width="100%"
        />
      </CardContent>
    </Card>
  )
}

export default SalesBreakdown
