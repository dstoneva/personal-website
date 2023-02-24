import { useEffect, useState } from 'react'
import { Typography, useTheme } from '@mui/material'
import dateFormatter from 'utils/helpers/dateFormatter'

const Clock = () => {
  const [now, setNow] = useState(new Date())
  const theme = useTheme()

  useEffect(() => {
    setInterval(() => {
      setNow(new Date())
    }, 1000)
  }, [])

  return (
    <Typography fontFamily={theme.typography.navBar} sx={{ ml: 1 }}>
      {dateFormatter(now)}
    </Typography>
  )
}

export default Clock