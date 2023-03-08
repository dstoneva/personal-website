import { Fragment } from 'react'
import { Dialog, DialogTitle, DialogContent, IconButton, Box, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { ProjectCard } from './components'

export default function ProjectDialog({ isDialogOpened, handleCloseDialog, project }) {
  const handleClose = () => {
    handleCloseDialog(false)
  }

  return (
    <Fragment>
      <Dialog maxWidth="md" open={isDialogOpened} onClose={handleClose} aria-labelledby="max-width-dialog-title">
        <DialogTitle id="max-width-dialog-title" sx={{ backgroundColor: 'terminal.secondary', marginBottom: 0, p: 1 }}>
          <Box display="flex" sx={{ position: 'absolute', left: 8, top: 10 }}>
            <FiberManualRecordIcon sx={{ color: 'terminal.trafficLight1' }} fontSize="small" />
            <FiberManualRecordIcon sx={{ color: 'terminal.trafficLight2' }} fontSize="small" />
            <FiberManualRecordIcon sx={{ color: 'terminal.trafficLight3' }} fontSize="small" />
          </Box>
          <Box display="flex" sx={{ postition: 'absolute', justifyContent: 'center' }}>
            <Typography variant="terminalbody1" textAlign="center" noWrap visibility={{ xs: 'hidden', sm: 'visible' }}>
              denitsa:~projects/{project.title.replace(/\s+/g, '-').toLowerCase()}
            </Typography>
          </Box>
          <IconButton
            size="small"
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 5,
              top: 5,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: 'terminal.main' }}>
          <ProjectCard project={project} />
        </DialogContent>
      </Dialog>
    </Fragment>
  )
}
