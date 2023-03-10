import { useState } from 'react'
import { Box, Card, CardMedia, IconButton } from '@mui/material'
import { RemoveRedEye } from '@mui/icons-material'
import { ProjectDialog } from 'components'

const LogoCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <ProjectDialog isDialogOpened={isOpen} handleCloseDialog={() => setIsOpen(false)} project={project} />
      <Card
        onClick={() => handleOpen()}
        sx={{
          margin: 1,
          position: 'relative',
          cursor: 'pointer',
          '&:hover #hidden-menu-eye': {
            opacity: 1,
            transition: 'opacity 0.25s',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'absolute',
            bgcolor: 'rgba(0,0,0, 0.54)',
            height: '100%',
            width: '100%',
            opacity: 0,
            transition: 'opacity 0.25s',
          }}
          id="hidden-menu-eye"
        >
          <IconButton
            sx={{
              width: '35px',
              height: '35px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' },
            }}
          >
            <RemoveRedEye fontSize="small" sx={{ color: 'rgba(0, 0, 0, 0.7)' }} />
          </IconButton>
        </Box>
        <CardMedia component="img" alt={project.title} image={project.logo} />
      </Card>
    </>
  )
}

export default LogoCard
