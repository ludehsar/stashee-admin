import React from 'react'
import dynamic from 'next/dynamic'
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  MenuItem,
  Select,
  useTheme,
} from '@mui/material'
import { ApexOptions } from 'apexcharts'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const SalesRevenue: React.FC = () => {
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
      ],
      name: 'User Registered',
    },
    {
      data: [
        {
          x: new Date('11 Jan 2021 GMT').getTime(),
          y: 12,
        },
        {
          x: new Date('12 Jan 2021 GMT').getTime(),
          y: 18,
        },
        {
          x: new Date('13 Jan 2021 GMT').getTime(),
          y: 24,
        },
      ],
      name: 'User Paid',
    },
  ]
  const options: ApexOptions = {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
      background: theme.palette.background.paper,
    },
    colors: ['#334AB1', '#6E7AD8'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    fill: {
      type: 'solid',
      opacity: 1,
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
    },
    xaxis: {
      type: 'datetime',
    },
  }
  return (
    <Card>
      <CardHeader
        title="Latest Sales"
        action={
          <Select variant="standard" size="small" defaultValue="7d">
            <MenuItem value="7d">Last 7 Days</MenuItem>
            <MenuItem value="30d">Last 30 Days</MenuItem>
            <MenuItem value="12m">Last 12 Months</MenuItem>
          </Select>
        }
      />
      <Divider />
      <CardContent>
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          width="100%"
        />
      </CardContent>
    </Card>
  )
}

export default SalesRevenue
