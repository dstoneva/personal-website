import { useState } from 'react'
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Box } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import ConstructionIcon from '@mui/icons-material/Construction'
import AssignmentIcon from '@mui/icons-material/Assignment'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'
import { PageURLs } from 'Routes'

export default function TopDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setIsOpen(open)
  }

  const navigationItems = [
    { name: 'Home', icon: <HomeIcon />, path: '/' },
    { name: 'About', icon: <InfoIcon />, path: PageURLs.About },
    { name: 'Skills', icon: <ConstructionIcon />, path: PageURLs.Skills },
    { name: 'Projects', icon: <AssignmentIcon />, path: PageURLs.Projects },
  ]

  const drawerContent = (
    <Box
      sx={{ width: 'auto', backgroundColor: 'terminal.main', borderRadius: 3 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navigationItems.map(({ name, icon, path }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton onClick={() => navigate(path)}>
              <ListItemIcon sx={{ color: 'terminal.subtitle', minWidth: 40 }}>{icon}</ListItemIcon>
              <ListItemText primary={name} sx={{ color: 'terminal.subtitle' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="top" open={isOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  )
}
