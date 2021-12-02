import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

import LoginBgImage from '../../assets/img/login_bg_new1.png'

export const LoginContainer = styled(Box)`
  background-image: url(${LoginBgImage.src});
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
