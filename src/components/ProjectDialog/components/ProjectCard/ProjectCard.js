import { Box, Button, Chip, Grid, Stack, Typography } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import CodeIcon from '@mui/icons-material/Code'

const ProjectCard = ({ project }) => {
  return (
    <Grid container alignItems="center" spacing={3} marginTop={1}>
      <Grid item xs={12} sm={5} md={5}>
        <Box component="img" sx={{ mx: 'auto', height: '100%', width: '100%', borderRadius: 1 }} src={project.media} />
      </Grid>
      <Grid item xs={12} sm={7} md={7}>
        <Stack direction="column" spacing={1.5}>
          <Typography variant="terminal4" sx={{ color: 'terminal.title', fontWeight: 500 }}>
            {project.title}
          </Typography>
          <Box display="flex" gap={2}>
            {project.technologies.map((project, i) => (
              <Chip key={i} label={project} sx={{ bgcolor: 'terminal.chip' }} />
            ))}
          </Box>
          <Typography variant="terminalbody1" color={(theme) => theme.palette.success.main}>
            {project.info}
          </Typography>
          <Box display="flex" gap={2} flexDirection={{ xs: 'column', sm: 'row' }}>
            <Button
              onClick={() => window.open(project.demoURL, '_blank')}
              variant="contained"
              color="primary"
              startIcon={<RemoveRedEyeIcon />}
            >
              View Demo
            </Button>
            <Button
              onClick={() => window.open(project.sourceURL, '_blank')}
              variant="outlined"
              color="primary"
              startIcon={<CodeIcon />}
            >
              View Source
            </Button>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default ProjectCard
