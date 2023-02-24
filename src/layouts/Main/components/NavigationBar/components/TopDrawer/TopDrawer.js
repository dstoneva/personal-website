import { useState, Fragment } from 'react'
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box,
  useTheme,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'


export default function TopDrawer() {
  const [state, setState] = useState({
    top: false,
  })

  const theme = useTheme()

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  let navigate = useNavigate()

  const details = [
    {
      id: 1,
      name: 'Home',
      icon: <HomeIcon />,
      onClick: () => {
        navigate('/')
        toggleDrawer()
      },
    },
  
  ]

  const list = (anchor) => (
    <Box
      sx={{ width: 'auto', backgroundColor: theme.palette.common.black, borderRadius: 3 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {details.map((item) => {
          const { id, name, icon, onClick } = item
          return (
            <ListItem key={id} disablePadding>
              <ListItemButton onClick={onClick}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )

  return (
    <div>
      <Fragment key='top'>
        <IconButton onClick={toggleDrawer('top', true)}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor='top' open={state['top']} onClose={toggleDrawer('top', false)}>
          {list('top')}
        </Drawer>
      </Fragment>
    </div>
  )
}