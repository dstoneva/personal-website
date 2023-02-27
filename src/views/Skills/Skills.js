import { Grid } from '@mui/material'
import { Terminal } from 'components'
import { Skillset } from './components'
import { techSkills } from 'utils/constants'
import { OnScreen } from 'motions'

const Skills = () => {
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
        <Grid item xs={12} md={10} lg={6} sx={{ mx: { md: 'auto', lg: 2 } }}>
          <OnScreen>
            <Terminal
              title="Tech stack, version control & UI frameworks"
              directory="skills"
              content={techSkills.map((skill, key) => (
                <Skillset key={key} skill={skill[key]} />
              ))}
            />
          </OnScreen>
        </Grid>
      </Grid>
  )
}

export default Skills
