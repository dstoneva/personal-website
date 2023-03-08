import { AppBar, Box, Toolbar, useMediaQuery, useTheme, Container, CssBaseline } from '@mui/material'
import { NavLink } from 'react-router-dom'
import Battery4BarIcon from '@mui/icons-material/Battery4Bar'
import WifiIcon from '@mui/icons-material/Wifi'
import SearchIcon from '@mui/icons-material/Search'
import AppleIcon from '@mui/icons-material/Apple'
import AirplayIcon from '@mui/icons-material/Airplay'
import { Clock, TopDrawer } from './components'
import { PageURLs } from 'Routes'

function NavigationBar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const navLinks = [
    { id: 1, name: 'Home', to: '/' },
    { id: 2, name: 'About', to: PageURLs.About },
    { id: 3, name: 'Skills', to: PageURLs.Skills },
    { id: 4, name: 'Projects', to: PageURLs.Projects },
  ]

  const activeStyle = {
    fontWeight: 700,
    textDecoration: 'none',
    fontSize: 16,
    color: theme.palette.grey[50],
    minWidth: 'auto',
    marginLeft: '0.75rem',
    padding: 1,
    cursor: 'default',
  }

  const nonActiveStyle = {
    textDecoration: 'none',
    fontSize: 16,
    color: theme.palette.grey[50],
    minWidth: 'auto',
    marginLeft: '0.75rem',
    padding: 1,
    cursor: 'default',
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        backdropFilter: 'blur(1px) saturate(186%)',
        border: '1px solidrgba(255, 255, 255, 0.125)',
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))',
      }}
      elevation={1}
    >
      <CssBaseline />
      <Container>
        <Toolbar>
          <Box
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 40, width: '100%' }}
          >
            {isMobile ? (
              <TopDrawer />
            ) : (
              <Box display="flex" alignItems="center">
                <AppleIcon />
                {navLinks.map((navLink) => {
                  const { id, name, to } = navLink
                  return (
                    <NavLink key={id} style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)} to={to}>
                      {name}
                    </NavLink>
                  )
                })}
              </Box>
            )}
            <Box style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <WifiIcon fontSize="small" />
              <Battery4BarIcon fontSize="small" />
              <SearchIcon fontSize="small" />
              <AirplayIcon fontSize="small" />
              <Clock />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavigationBar
