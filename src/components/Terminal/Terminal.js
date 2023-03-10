import { Box, Typography } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import TypingText from 'components/TypingText'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

function Terminal({ content, title, directory }) {
  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent={'space-between'}
        sx={{
          backgroundColor: 'terminal.secondary',
          borderRadius: '0.5rem 0.5rem 0 0',
          p: '0.5rem',
          maxHeight: '2.25rem',
        }}
      >
        <Box display="flex">
          <FiberManualRecordIcon sx={{ color: 'terminal.trafficLight1' }} fontSize="small" />
          <FiberManualRecordIcon sx={{ color: 'terminal.trafficLight2' }} fontSize="small" />
          <FiberManualRecordIcon sx={{ color: 'terminal.trafficLight3' }} fontSize="small" />
        </Box>

        <Typography
          variant="terminalbody1"
          noWrap
          sx={{
            overflow: 'hidden',
          }}
        >
          denitsa:~/{directory}
        </Typography>
        <MoreHorizIcon />
      </Box>
      <SimpleBar style={{ maxHeight: 500 }}>
        <Box
          borderRadius={'0 0 0.5rem 0.5rem'}
          sx={{
            backgroundColor: 'terminal.main',
            border: '3px solid #273244',
            p: '1rem',
          }}
        >
          <Typography variant="terminalbody1" color='terminal.subtitle'>
            <TypingText strings={title} loop={false} />
          </Typography>
          <Box sx={{ mt: 2 }}>{content}</Box>
        </Box>
      </SimpleBar>
    </div>
  )
}

export default Terminal
