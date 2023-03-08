import { Grid } from '@mui/material'
import { ProjectsGrid } from './components'
import { Terminal } from 'components'
import { OnScreen } from 'motions'

const Projects = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        px: 4,
      }}
      spacing={2}
    >
      <Grid item xs={12} md={10} lg={8} sx={{ mx: { md: 'auto', lg: 2 } }}>
        <OnScreen>
          <Terminal title="projects" directory="projects" content={<ProjectsGrid />} />
        </OnScreen>
      </Grid>
    </Grid>
  )
}

export default Projects
