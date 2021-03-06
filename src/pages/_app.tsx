import React from 'react'
import { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { lightTheme } from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
