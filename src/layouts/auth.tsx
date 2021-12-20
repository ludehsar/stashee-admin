import React from 'react'
import { Card, CardContent, CardActions, styled } from '@mui/material'

import Copyright from '../components/copyright'
import LoginBgImage from '../../public/images/login_bg_new1.png'

const LoginContainer = styled('div')`
  background-image: url(${LoginBgImage.src});
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AuthLayout: React.FC = ({ children }) => {
  return (
    <LoginContainer>
      <Card sx={{ maxWidth: 560, borderRadius: 4 }}>
        <CardContent>{children}</CardContent>
        <CardActions sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </CardActions>
      </Card>
    </LoginContainer>
  )
}

export default AuthLayout
