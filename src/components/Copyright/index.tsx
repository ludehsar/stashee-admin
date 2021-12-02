import React from 'react'
import NextLink from 'next/link'
import { Typography, TypographyProps, Link } from '@mui/material'
import Constants from '../../constants'

const Copyright: React.FC<TypographyProps> = (props) => {
  return (
    <Typography variant="body2" color="GrayText" align="center" {...props}>
      {'Copyright © '}
      <NextLink href={Constants.frontendUrl}>
        <Link color="inherit" href={Constants.frontendUrl} target="_blank">
          {Constants.appName}
        </Link>
      </NextLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default Copyright
