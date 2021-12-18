import { styled } from '@mui/material/styles'
import { AppBar, IconButton, Toolbar } from '@mui/material'

export const NavbarContainer = styled(AppBar)`
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-image: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  position: fixed;
  z-index: 1200;
  top: 0px;
  left: auto;
  right: 0px;
  color: rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(100 116 139 / 12%) 0px 1px 4px;
`

export const NavToolbar = styled(Toolbar)`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  min-height: 64px;
  left: 0px;
  padding-left: 16px;
  padding-right: 16px;
`

export const NavButton = styled(IconButton)`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 0px 0px 0px 8px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  text-align: center;
  flex: 0 0 auto;
  font-size: 1.5rem;
  overflow: visible;
  color: rgb(107, 114, 128);
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 8px;
  padding: 8px;
`

export const MenuButton = styled(NavButton)`
  @media (min-width: 1200px) {
    display: none;
  }
`
