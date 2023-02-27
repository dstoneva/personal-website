import { Paper, Box, Typography, IconButton, Stack, Input } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SettingsIcon from '@mui/icons-material/Settings'
import { PageLayout } from 'layouts/Main/components'
import { API_URL, REACT_APP_API_KEY } from 'config'
import { useError } from 'utils/hooks'

const TempApp = () => {
  const [view, setView] = useState(false)
  const { setError } = useError()
  const [city, setCity] = useState('Sofia')

  const [forecast, setData] = useState({
    current: {
      condition: '',
      icon: '',
    },
    location: {},
  })

  const baseUrl = `${API_URL}/v1/current.json?key=${REACT_APP_API_KEY}&q=${city}`

  const getData = () => {
    try {
      axios.get(baseUrl).then((res) => {
        setData({
          current: res.data.current,
          location: res.data.location,
        })
      })
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const submitHandler = (e) => {
    if (e.key === 'Enter') {
      getData()
      setView(!view)
    }
  }

  return (
    <PageLayout data={forecast}>
      <Paper
        sx={{
          p: 2,
          width: 270,
          height: 220,
          borderRadius: 8,
        }}
      >
        <Box display="flex" alignContent="center" justifyContent="flex-end">
          <IconButton onClick={() => setView(!view)}>
            <SettingsIcon fontSize="small" />
          </IconButton>
        </Box>

        <Box display="flex" justifyContent="flex-start" marginLeft={3}>
          {view ? (
            <Input
              placeholder="Change location..."
              sx={{ mt: 3 }}
              onKeyDown={submitHandler}
              onChange={(e) => {
                setCity(e.target.value)
              }}
            />
          ) : (
            <Box display="flex" alignItems="flex-start" flexDirection="column">
              <Stack>
                <Typography variant="subtitle2">
                  {forecast?.location.name}, {forecast?.location?.country}
                </Typography>
                <Typography variant="h2">{Math.round(forecast?.current?.temp_c)}°</Typography>
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
      </Paper>
    </PageLayout>
  )
}

export default TempApp
