import { styled } from '@mui/material/styles'
import { AppBar } from '@mui/material'

export const NavbarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}))
