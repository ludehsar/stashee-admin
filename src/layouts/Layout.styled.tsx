import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

import LoginBgImage from '../../public/images/login_bg_new1.png'

export const LoginContainer = styled(Box)`
  background-image: url(${LoginBgImage.src});
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AppLayoutContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280,
  },
}))
