import { Grid, Typography } from '@mui/material'
import { OnScreen } from 'motions'
import { Terminal } from 'components'
import { personalInfo } from 'utils/constants'
import { Hobbies } from './components'

const About = () => {
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
              title="about me"
              directory="about-me"
              content={
                <>
                  <Typography align="left" variant="terminalbody1" color={(theme) => theme.palette.success.main}>
                    {personalInfo.aboutMe}
                  </Typography>
                  <Hobbies />
                </>
              }
            />
          </OnScreen>
        </Grid>
      </Grid>
  )
}

export default About
