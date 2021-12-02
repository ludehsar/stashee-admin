import React from 'react'
import { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { theme } from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
