import { Grid } from '@mui/material'
import projectsInfo from 'utils/constants/projectsInfo'
import { LogoCard } from './components'

const ProjectsGrid = () => {
  return (
    <Grid container spacing={1}>
      {projectsInfo.map((project, i) => {
        return (
          <Grid item xs={6} sm={3} key={i}>
            <LogoCard project={project} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ProjectsGrid
