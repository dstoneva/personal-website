import { useState, useEffect } from 'react'
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Box } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import ConstructionIcon from '@mui/icons-material/Construction'
import AssignmentIcon from '@mui/icons-material/Assignment'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate, useLocation } from 'react-router-dom'
import { PageURLs } from 'Routes'

export default function TopDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev)
  }

  const navigationItems = [
    { name: 'Home', icon: <HomeIcon />, path: '/' },
    { name: 'About', icon: <InfoIcon />, path: PageURLs.About },
    { name: 'Skills', icon: <ConstructionIcon />, path: PageURLs.Skills },
    { name: 'Projects', icon: <AssignmentIcon />, path: PageURLs.Projects },
  ]

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const handleNavigation = (path) => {
    if (path === location.pathname) {
      setIsOpen(false)
      return
    }
    navigate(path)
  }

  const drawerContent = (
    <Box
      sx={{ width: 'auto', backgroundColor: 'terminal.main', borderRadius: 3 }}
    >
      <List>
        {navigationItems.map(({ name, icon, path }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton onClick={() => handleNavigation(path)}>
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
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="top" open={isOpen} onClose={toggleDrawer}>
        {drawerContent}
      </Drawer>
    </>
  )
}
