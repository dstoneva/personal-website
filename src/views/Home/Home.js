import { Box, Typography, Grid, Button } from '@mui/material'
import { TypingText } from 'components'
import { MailTo } from './components'
import { OnScreen, float } from 'motions'
import DownloadIcon from '@mui/icons-material/Download'
import EmailIcon from '@mui/icons-material/Email'
import { personalInfo } from 'utils/constants'

const Home = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      spacing={2}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={12} sm={12} md={6}>
        <OnScreen>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2 }}
          >
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexDirection: 'column' }}>
              <Typography
                textAlign="center"
                variant="h3"
                color="common.white"
                sx={{ fontWeight: (theme) => theme.typography.fontWeightMedium }}
              >
                Hello!
              </Typography>
              <Typography
                textAlign="center"
                variant="h3"
                color="common.white"
                sx={{ fontWeight: (theme) => theme.typography.fontWeightMedium }}
              >
                I'm {personalInfo.fullName}
              </Typography>
            </Box>
            <Typography textAlign="center" variant="h4" color="secondary.light">
              <TypingText strings={personalInfo.dynamicText} loop={true} />
            </Typography>
            <Box
              sx={{
                display: 'flex',
                mt: 3,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                flexDirection: { xs: 'column', md: 'row' },
              }}
            >
              <Button color="primary" variant="contained" startIcon={<DownloadIcon />}>
                Download Resume
              </Button>
              <Button variant="outlined" startIcon={<EmailIcon />}>
                <MailTo label="Contact Me" mailto={`mailto:${personalInfo.email}`} />
              </Button>
            </Box>
          </Box>
        </OnScreen>
      </Grid>
      <Grid item display={{ xs: 'none', md: 'block' }} md={6}>
        <Box
          component="img"
          src="/images/Hire-A-Coder.png"
          alt="female programmer illustration"
          sx={{
            animation: `${float} 5s infinite ease`,
            height: { md: 'auto' },
            width: '80%',
            display: { md: 'flex', xs: 'none' },
            objectFit: 'contain',
          }}
        />
      </Grid>
    </Grid>
  )
}

export default Home
