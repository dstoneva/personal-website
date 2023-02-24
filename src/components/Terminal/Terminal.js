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
          backgroundColor: '#31363f',
          borderRadius: '0.5rem 0.5rem 0 0',
          p: '0.5rem',
          cursor: 'move',
          maxHeight: '2.25rem',
        }}
      >
        <Box display="flex">
          <FiberManualRecordIcon sx={{ color: '#fb4847' }} fontSize="small" />
          <FiberManualRecordIcon sx={{ color: '#feb525' }} fontSize="small" />
          <FiberManualRecordIcon sx={{ color: '#2ac933' }} fontSize="small" />
        </Box>

        <Typography
          variant="subtitle1"
          noWrap
          sx={{
            color: (theme) => theme.palette.common.white,
            overflow: 'hidden',
          }}
        >
          denitsa:~/{directory}
        </Typography>
        <MoreHorizIcon />
      </Box>
      <SimpleBar style={{ maxHeight: 452 }}>
        <Box
          borderRadius={'0 0 0.5rem 0.5rem'}
          sx={{
            backgroundColor: '#282A36',
            border: '3px solid #31363f',
            p: '1rem',
          }}
        >
          <Typography variant="subtitle" color={(theme) => theme.palette.success.main}>
            <TypingText strings={title} loop={false} />
          </Typography>
          <Box sx={{ mt: 2 }}>{content}</Box>
        </Box>
      </SimpleBar>
    </div>
  )
}

export default Terminal
