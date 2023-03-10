import { Paper, Box, Typography, IconButton, Stack, Input } from '@mui/material'
import { useState } from 'react'
import { UnitSwitch } from './components'
import SettingsIcon from '@mui/icons-material/Settings'
import { PageLayout as Widget } from 'layouts/Main/components'
import useSWR from 'swr'
import { REACT_APP_API_KEY } from 'config'
import { ArrowBack } from '@mui/icons-material'

const TempApp = () => {
  const [city, setCity] = useState('Sofia')
  const { data: forecast, error } = useSWR(`/v1/current.json?key=${REACT_APP_API_KEY}&q=${city}`)
  const [view, setView] = useState(false)
  const [unit, setUnit] = useState('C')

  const submitHandler = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      setCity(e.target.value)
      setView(!view)
    }
  }

  const clickHandler = () => {
    setCity('Sofia')
    setView(!view)
  }

  return (
    <Paper
      sx={{
        p: 2,
        width: 270,
        height: 220,
        borderRadius: 8,
      }}
    >
      <Widget
        weatherApi
        data={forecast}
        error={error?.response.data.error.message}
        button={
          <IconButton size="small" variant="contained" color="primary" onClick={clickHandler}>
            <ArrowBack fontSize="small" />
          </IconButton>
        }
      >
        <Box display="flex" alignContent="center" justifyContent="flex-end">
          <IconButton onClick={() => setView(!view)}>
            <SettingsIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box display="flex" justifyContent="flex-start" marginLeft={3}>
          {view ? (
            <Input autoFocus placeholder="Enter a city and press Enter" sx={{ mt: 3 }} onKeyDown={submitHandler} />
          ) : (
            <Box display="flex" alignItems="flex-start" flexDirection="column">
              <Stack>
                <Typography variant="subtitle2">
                  {forecast?.location.name}, {forecast?.location?.country}
                </Typography>
                <Box display="flex" gap={0.5}>
                  <Typography variant="h2">
                    {Math.round(unit === 'C' ? forecast?.current?.temp_c : forecast?.current?.temp_f)}
                  </Typography>
                  <UnitSwitch unit={unit} setUnit={setUnit} />
                </Box>
              </Stack>
              <Stack>
                <Box display="flex" alignItems="center">
                  <Box
                    component="img"
                    src={forecast?.current?.condition?.icon}
                    sx={{
                      height: '50px',
                      width: '50px',
                      ml: -1.5,
                    }}
                  />
                  <Typography variant="subtitle1" fontSize={16}>
                    {forecast?.current?.condition?.text}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          )}
        </Box>
      </Widget>
    </Paper>
  )
}

export default TempApp
