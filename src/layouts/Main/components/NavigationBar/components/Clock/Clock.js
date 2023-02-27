import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import dateFormatter from 'utils/helpers/dateFormatter'

const Clock = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    setInterval(() => {
      setNow(new Date())
    }, 1000)
  }, [])

  return (
    <Typography fontSize={16} sx={{ ml: 1 }}>
      {dateFormatter(now)}
    </Typography>
  )
}

export default Clock
