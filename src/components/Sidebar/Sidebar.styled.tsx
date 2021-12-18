import { styled } from '@mui/material/styles'
import { List, ListSubheader } from '@mui/material'

export const SidebarListGroup = styled(List)`
  list-style: 'none';
  margin: 0px;
  padding: 0px 0px 8px;
  position: relative;
`

export const SidebarList = styled(List)`
  list-style: none;
  margin: 0px;
  padding: 0px;
  position: relative;
`

export const SidebarListSubHeader = styled(ListSubheader)`
  box-sizing: border-box;
  list-style: none;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  color: rgb(107, 114, 128);
  font-size: 0.75rem;
  font-weight: 700;
  margin-left: 16px;
  line-height: 2.5;
  text-transform: uppercase;
  background-color: inherit;
`
