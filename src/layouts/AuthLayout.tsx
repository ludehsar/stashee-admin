import React from 'react'
import { Card, CardContent, CardActions } from '@mui/material'

import Copyright from '../components/Copyright'
import { LoginContainer } from './Layout.styled'

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
