import { Grid, Stack, Typography } from '@mui/material'
import { Terminal } from 'components'
import { Skillset } from './components'
import { techSkills } from 'utils/constants'
import { OnScreen } from 'motions'
import { personalInfo } from 'utils/constants'

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
      <Grid item xs={12} md={10} lg={8} sx={{ mx: { md: 'auto', lg: 2 } }}>
        <OnScreen>
          <Terminal
            title="Tech stack, version control & UI frameworks"
            directory="skills"
            content={
              <Stack>
                <Typography variant="terminalbody1" color="terminal.body">
                  {personalInfo.skills}
                </Typography>
                <Typography variant="terminalbody1" color="terminal.title">
                  The following are the technologies that I am most familiar with, including the UI frameworks and
                  version control systems I've used:
                </Typography>
                {techSkills.map((skill, key) => (
                  <Skillset key={key} skill={skill[key]} />
                ))}
              </Stack>
            }
          />
        </OnScreen>
      </Grid>
    </Grid>
  )
}

export default Skills
