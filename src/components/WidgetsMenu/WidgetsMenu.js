import { Box } from '@mui/material'
import { CalendarWidget, WeatherWidget } from './components'

const WidgetsMenu = () => {
  return (
    <Box
      display={{ md: 'none', sm: 'none', xs: 'none', lg: 'flex', xl: 'flex' }}
      flexDirection="column"
      alignItems="flex-end"
      gap={2}
    >
      <WeatherWidget />
      <CalendarWidget />
    </Box>
  )
}

export default WidgetsMenu
