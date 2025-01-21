import { CircularProgress, Box, useMediaQuery, useTheme } from '@mui/material'
import { ErrorBoundary, WidgetsMenu } from 'components'
import { Outlet } from 'react-router-dom/dist'
import { Dock, NavigationBar } from './components'

const Main = ({ isSuspense }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <ErrorBoundary>
      <NavigationBar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={
          isMobile
            ? `calc(100dvh - ${theme.sizing.header.height})`
            : `calc(100dvh - (${theme.sizing.header.height} + ${theme.sizing.footer.height}))`
        }
        maxWidth="lg"
        margin="auto"
      >
        <Box
          sx={{
            width: '100%',
          }}
        >
          {isSuspense ? <CircularProgress /> : <Outlet />}
        </Box>
        <WidgetsMenu />
      </Box>
      {!isMobile && <Dock />}
    </ErrorBoundary>
  )
}

export default Main
